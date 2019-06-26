---
author: david-mcclure
date: 2011-07-05 10:16:31+00:00
layout: post
slug: fedora-connector-new-and-improved
title: Fedora Connector - New and Improved
categories:
- Announcements
- Research and Development
---

This week we’re pleased to announce that we’ve finished up the first pass on a major redesign of our Fedora Connector plugin for Omeka.  Fedora Connector makes it possible to connect an Omeka site to a [Fedora Commons](http://www.fedora-commons.org/) repository.  After entering basic information about the location of the Fedora repository, you can create linkages between “datastreams” in Fedora and the native Omeka items on your site.  Once those associations are configured, you can import all of the metadata from Fedora into Omeka with a single click.

You can [grab the code on GitHub](https://github.com/scholarslab/FedoraConnector).

We’ve completely redesigned the front-end administrative interfaces and made a lot of plumbing upgrades to the code that communicates with Fedora.  One of the challenges with this type of “glue” software – code that crosses back and forth between different systems and data standards – is that it’s always something of a losing game to try to cover all possible use cases.  For example, Fedora Connector needs to query the XML in a Fedora datastream for a particular set of nodes that can be used to populate the native Dublin Core fields for Omeka items.  That's pretty straightforward if the datastream is already encoded in Dublin Core – but if it’s not, the plugin needs a "conversion table" of sorts so that it knows that node X in Dublin Core corresponds to node Y in whatever schema the target datastream is marked up in.

Trying to code out all possible combinations of metadata standards would devolve into a big game of programming whack-a-mole.  Some permutations are obvious.  For example, the new version of Fedora Connector ships with code to convert from the commonly used MODS metadata format.  But the edge cases aren’t so obvious, and beyond a certain point it becomes a fool’s errand to try to guess to hard about software will be used in the wild.

Luckily, this is just the sort of situation where open source really shines!  Eric and Wayne concocted a highly clever system that essentially creates a “sub-plugin” ecosystem inside of the Fedora Connector plugin that makes it possible to modularly snap in new chunks of code to handle specific metadata formats.  This way, if you need the plugin to communicate with an unsupported metadata standard on your Fedora server, you can just write out the XPath queries that map onto the Dublin Core fields, and, with a minimal amount of easy-on-the-eyes boilerplate, plug the new importer into Fedora Connector.
<!-- more -->
Here’s how it works.  New importers just inherit from an abstract class called FedoraConnector_AbstractImporter, which handles all of the utility tasks of fetching content from Fedora and writing new values to the Omeka database.  All you have to do is define two functions.  The first, called canImport(), essentially just announces to the sub-plugin system that datastreams of metadata type X (whatever standard your code is supporting) can now be imported.  And the second, called getQueries(), takes the name of Dublin Core value and returns the queries needed to find the corresponding value(s) in the datastream content.

First, though, we need to tell PHP where to find the abstract class:

```
require_once FEDORA_CONNECTOR_PLUGIN_DIR . '/libraries/FedoraConnector/AbstractImporter.php';
```

Next, declare your new class and tell it to inherit from the abstract base class:

```
require_once FEDORA_CONNECTOR_PLUGIN_DIR . '/libraries/FedoraConnector/AbstractImporter.php';

class NameOfFormat_Importer extends FedoraConnector_AbstractImporter
{

}
```

Make sure to name your class with the format [NameOfFormat]_Importer so that Fedora Connector can see it.  Now, add the declarations for the two functions:

```
require_once FEDORA_CONNECTOR_PLUGIN_DIR . '/libraries/FedoraConnector/AbstractImporter.php';

class NameOfFormat_Importer extends FedoraConnector_AbstractImporter
{

	public function canImport($datastream)
	{

	}

	public function getQueries($name)
	{

	}

}

```

In canImport(), you just need to return a true or false value depending on whether or not the passed in datastream matches the format that your importer is designed to handle.  This can be done by just checking for equality and returning the result of the evaluation:

```
require_once FEDORA_CONNECTOR_PLUGIN_DIR . '/libraries/FedoraConnector/AbstractImporter.php';

class NameOfFormat_Importer extends FedoraConnector_AbstractImporter
{

	public function canImport($datastream)
	{
		return ($datastream->metadata_stream == ‘NameOfFormat’);
	}

	public function getQueries($name)
	{

	}

}

```

Now, all that's left is to process the Dublin Core $name variable getting passed into the getQueries() function and return an array of XPath queries that will pluck the corresponding nodes out of a document marked up in the format that you need to accommodate.  Just run a switch-case on the $name and run through all the Dublin Core values:

```
require_once FEDORA_CONNECTOR_PLUGIN_DIR . '/libraries/FedoraConnector/AbstractImporter.php';

class NameOfFormat_Importer extends FedoraConnector_AbstractImporter
{

	public function canImport($datastream)
	{
		return ($datastream->metadata_stream == ‘NameOfFormat’);
	}

	public function getQueries($name)
	{

		switch ($name) {

			case 'Title':

				$queries = array(
				'//*[local-name()="mods"]/*[local-name()="titleInfo"]'
					. '/*[local-name()="title"]'
				);

			break;

			case 'Creator':

				$queries = array(
				'//*[local-name()="mods"]'
					. '/*[local-name()="name"][*[local-name()="role"] = "creator"]'
				);

			break;

			[...handle all DC values...]

		}

		return $queries;

	}

}

```

Stick the file in the FedoraConnector/Importers directory and you're good to go!  We've also implemented a nifty method of adding custom "renderers" to the plugin - code that controls the display of various data formats on the public-facing Omeka site.  Check out the [README.md](https://github.com/scholarslab/FedoraConnector/blob/master/README.md) file on GitHub for details, and watch for more development on the plugin in the near future.
