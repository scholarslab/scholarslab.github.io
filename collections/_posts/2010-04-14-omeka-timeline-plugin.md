---
author: wayne-graham
date: 2010-04-14 15:19:44+00:00
excerpt: As part of our ongoing efforts on our Neatline grant, we needed to include a way of displaying temporal information and interacting with other data stored in Omeka. Just about the time we were starting to write this code, CHNM announced their Plugin Rush which pays an honorarium to give folks some incentive to pitch in and develop a plugin or two. Since we were going to develop the plugin anyway, we're donating this back to the Omeka project, but we thought this might be a good opportunity to talk a little more about the development cycle for Omeka plugins, and hopefully inspire others to get involved.
layout: post
slug: omeka-timeline-plugin
title: Omeka Timeline Plugin
category: blog
tags:
- Research and Development
- code
- tutorial
- omeka
- timeline
---

As part of our ongoing efforts on our [Neatline](http://www.neatline.org) grant, we needed to include a way of displaying temporal information and interacting with other data stored in Omeka. Just about the time we were starting to write this code, CHNM announced their [Plugin Rush](http://omeka.org/blog/2010/02/18/plugin-rush-2010/) which pays an honorarium to give folks some incentive to pitch in and develop a plugin or two. Since we were going to develop the plugin anyway, we're donating this back to the Omeka project, but we thought this might be a good opportunity to talk a little more about the development cycle for Omeka plugins, and hopefully inspire others to get involved.  <!-- more -->

The specifications for the [Timeline plugin](http://omeka.org/c/index.php/Plugin_Rush_2010#Timeline_.281.1-1.0.29) are wonderfully documented and explained on the Omeka wiki. This actually illustrates a great practice that is all too often ignored...explicitly stating what some software should do. Taking the time to think through the "what" a piece of software should do will save  you time in the long run as it forces you to think about how everything fits together, alleviating ambiguity and allowing you to focus on the task at hand.

For this specification, there were two requirements:



	
  * The plugin should create a helper function for creating a [SIMILE  Timeline](http://www.simile-widgets.org/timeline/) widget from an array of items.  The helper function should allow you to  specify which metadata elements the time data should come from, as well  as the element that specifies the caption (by default, the Dublin Core  Title element).

	
  * The timeline should allow for time intervals (start and end dates) and points in  time (singe date).


While there are two requirements, it's a good idea to break this us a little more into individual (atomic) tasks. First, we need to take a look at the [SIMILE Timeline Widget documentation](http://code.google.com/p/simile-widgets/wiki/Timeline). Taking a quick look at their [Getting Started](http://code.google.com/p/simile-widgets/wiki/Timeline_GettingStarted) guide, this seems pretty straight forward



	
  1. [Include the Timeline javascript](http://code.google.com/p/simile-widgets/wiki/Timeline_GettingStarted#Step_1._Link_to_the_API)

	
  2. Create a div container in the HTML view (e.g. <div id="timeline"></div>

	
  3. Format the items from Omeka as [Timeline Events](http://code.google.com/p/simile-widgets/wiki/Timeline_GettingStarted#Step_5._Add_Events)

	
  4. Add the Timeline.create() call to the Omeka HTML view


The specification states that this needs to be a helper function. If you're not familiar with this term, a helper function is a block of code that does some of the computation for another piece of code. In many frameworks, helper functions aren't actual objects, but pieces of procedural code that can be accessed from across the application that help add functionality that isn't exactly proper to place in a model or controller; essentially these are statically accessible functions (in coding terms) that can be called from properly instantiated objects (in this case a view).

Now that we have good idea of what the code should do, let's turn to some actual code. Omeka uses the [Zend Framework](http://framework.zend.com/) to keep from doing a lot of repetitive programming, so most of the syntax of what we need to do is driven by how Zend handles PHP. On top of the Zend Framework, Omeka implements its own plugin infrastructure, so there are a few things we need to take in to account in our design.

The Zend Framework is a [model-view-controller (MVC) framework](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) designed to organize code for maintainability and DRY-ness ([Don't Repeat Yourself](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself)). One the the hallmarks of most MVC applications is its physical separation of files and functionalities. In the case of Omeka plugins, the hierarchy is generally split into model, view, controller, and tests directory. For the Timeline plugin, since we are developing a helper function, we use a slightly modified directory structure:

```
Timeline
|__helpers
|__tests
|__views
```

We also need some mechanism to tell Omeka about a plugin. This metadata is currently provided in a file called plugin.ini. This file is pretty straight forward, but  let's go over it briefly:

```

[info]
name="Timeline"
author="Scholars' Lab"
description="SIMILE Timeline for Omeka"
link="http://omeka.org/codex/Plugins/Timeline"
omeka_minimum_version="1.0"
omeka_tested_up_to="1.2"
version="1.1"
tags="Timeline, simile, chronology, time, temporal"

```

This file is what the Omeka admin interface uses to display information about your plugin. Two things that may not be initially obvious are the **omeka_minimimum_version** and **omeka_tested_up_to** lines. One fact you'll learn about software development, especially with API development, is as projects mature, the needs of the API grow along with them. You want to be able to mitigate potential issues should the plugin API change by explicitly setting the minimum revision number that your plugin is tested against (you can get older revisions from the SVN tags repo at [https://omeka.org/svn/tags/](https://omeka.org/svn/tags/)).


> **Note:** you can run multiple versions of Omeka on your machine for testing by checking out separate versions of the software in you web tree. For instance, you can have **localhost/omeka1.0**, **localhost/omeka1.1**, **localhost/omeka_trunk**. Setting this up is beyond the scope of this post (be sure to set up separate databases), but if you have questions, leave a comment.


The next thing we need to do is tell Omeka what to do with our plugin. The top-level plugin.php file contains instructions ([hooks](http://omeka.org/codex/Plugin_API/Hooks)) to tell the Admin interface what to do when a user installs or uninstalls the plugin. This is where we let Omeka know that items tagged with "Timeline" should use the Timeline Plugin, to set up some logging to help us debug when something goes wrong, and some default [routes](http://omeka.org/codex/Plugin_API/Hook/define_routes) to help make "pretty" URLs.

Now, with all the preliminary setup taken care of, now we can start developing the helper function. First, let's examine the Controller which tells Omeka what to do when an action is requested by the framework. This is actually a fairly straight forward:

```

<?php
class Timeline_TimelinesController extends Omeka_Controller_Action

{
	private $logger;

	public function init()
	{
		$this->_modelClass = 'Item';
		$writer = new Zend_Log_Writer_Stream(LOGS_DIR . DIRECTORY_SEPARATOR . "timeline.log");
		$this->logger = new Zend_Log($writer);
	}

	public function showAction()
	{
		$this->view->item = $this->findById();
	}

}
```

Let's go over briefly what's going on here. There are some semantics in the way in which these Controller objects are named which are inherited from the way in which Zend handles Controllers. The **Timeline_TimelinesController** follows the convention of the "package" (the plugin) name, underscore, plural controller name (to handle multiple controllers), and finally "Controller" (which explicitly tells a programmer what function the Object performs). Because this is a Framework, we also want to be able to inherit a lot of behaviors without needing to code them ourselves, which is handled by the "extends Omeka_Controller_Action" (this is the base [CRUD](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete) class for Omeka which overrides and extends the [Zend_Controller_Action](http://framework.zend.com/manual/en/zend.controller.action.html) object). The "important" part of the Controller code is really the showAction function which sets a variable named "item" in the view which contains a reference to the ID of an Omeka object. The rest just sets up a logger to keep track of what's going on.


> **Note**: If you run in to problems with this plugin, it is most likely related to logging. For more on this, see the documentation on [Retrieving Error Messages](http://omeka.org/codex/Retrieving_error_messages).


Now we can get into the guts of the actual helper function. When you boil down the code, most of this is JavaScript with some strategically placed PHP. What we did is create a helper function named "createTimeline" which actually does the work for us. This takes two required items, a div reference to associate the Timeline on your page, and an array of Omeka Items with which to populate the Timeline.

```
function createTimeline($div, $items = array(), $captionElementSet = "Dublin Core", $captionElement =  "Title", $dateElementSet = "Dublin Core", $dateElement =  "Date" ) {
		echo js("prototype");
		global $mets;
		$mets = array($captionElementSet, $captionElement, $dateElementSet, $dateElement);
		?>
		<!--  we have to load the script in this funny way because we need to get the tag into the head of the doc
			because of the the funky way Simile Timeline loads its sub-scripts  -->
		<script type="text/javascript">
			scripttag = document.createElement("script");
			scripttag.src = "http://static.simile.mit.edu/timeline/api-2.3.0/timeline-api.js?bundle=false";
			scripttag.type = "text/javascript";
			$$("head")[0].insert(scripttag);

			if (typeof(Omeka) == "undefined") {
				Omeka = new Object();
			}

			if (!Omeka.Timeline) {
				Omeka.Timeline = new Object();
			}

		</script>

		<script type="text/javascript" defer="defer">
			Omeka.Timeline.timelinediv = $("<?php echo $div;?>");

			Omeka.Timeline.events = [
			<?php
				function event_to_json($item) {
					global $mets;
					return "{ 'title' : '" . getMet($item, $mets[0], $mets[1]) . "',
					'start' : '" . getMet($item, $mets[2], $mets[3]) . "',
					'description' : '" . getMet($item, "Dublin Core", "Description") . "',
					'durationEvent':false }";
				}
				echo implode(',',array_map('event_to_json', $items));
				?>
				];

		</script>
		<?php
	     echo js("createTimeline");
		?>
		<script type="text/javascript">
			Event.observe(window, 'load', onLoad);
			Event.observe(document.body, 'resize', onResize);
		</script>

		<?php
}

```

There's a lot going on here, and there is a mix of PHP in the JavaScript. The first thing is making sure the prototype.js library is included, then declaring a variable named "mets" in the [global scope](http://php.net/manual/en/language.variables.scope.php) (to make it available to other variable scopes). After we've declared $mets, get in to the JavaScript to include on the page and introducing a new JavaScript [Namespace](http://en.wikipedia.org/wiki/Namespace_%28computer_science%29) (Omeka.Timeline) which allows you to extend this code in other views.

The second script block actually formats Omeka items that you've called as Timeline Events in the [JSON](http://www.json.org/) format calling a helper method we also include in the code:

```
function getMet($item, $elementSet, $element) {
	 $tmp = $item->getElementTextsByElementNameAndSetName($element, $elementSet);
	 return addslashes( $tmp[0]->text ) ;
}

```

This function returns the metadata for an Omeka item, which is then used the createTimeline's sub-method of event_to_json to properly construct an event for Timeline. After all the JSON strings are created, we "glue" all the array elements with a comma with the [implode](http://php.net/manual/en/function.implode.php) function.

As you can see, not a lot of code actually needs to be written to add functionality to Omeka. With a little research, and some pointers on syntax, extending Omeka can be done quite quickly and doesn't require a degree in computer science. If you're interested in getting started on a plugin, I highly recommend the [Omeka dev list](http://groups.google.com/group/omeka-dev); the community is growing and questions are answered quickly (usually by folks on the Omeka development team) and is a great way to learn about the technical issues surrounding developing software using the Omeka platform.


## Resources


  * [Omeka Plugin API](http://omeka.org/codex/Plugin_API)

	
  * [Omeka Developer List](http://groups.google.com/group/omeka-dev)

	
  * [Timeline Source Code](https://addons.omeka.org/svn/plugins/Timeline/trunk/)

	
  * [Timeline Documentation](http://omeka.org/codex/Plugins/Timeline)

	
  * [Zend Framework](http://framework.zend.com/)

	
  * [Zend Framework Documentation](http://framework.zend.com/manual/en/)


