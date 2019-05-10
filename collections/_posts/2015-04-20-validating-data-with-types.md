---
author: eric-rochester
date: 2015-04-20 13:47:06+00:00
layout: post
slug: validating-data-with-types
title: Validating Data with Types
---

Recently, I had to opportunity to help [J. Warren York](http://politics.virginia.edu/node/181), a graduate student in the Department of Politics here at UVa. He’s looking at how tax law affects political contributions and advocacy, so this was an interesting project that may tell us something useful about how the US government works [insert your favorite broken-government joke here].




To do this, he needed to download data from a number of different sources in different formats (JSON, YAML, and CSV), pull it all apart, and put some of it back together in a couple of new data files. One of those sources is the [Database on Ideology, Money in Politics, and Elections (DIME)](http://data.stanford.edu/dime). The data from them tells how much people and organizations have contributed to various candidates, PAC, and other groups.




And while I’ve seen worse, it wasn’t the cleanest data file out there. (To get an idea of what the data looks like, you can see a sample of 100 rows from this data file in [this Google Sheet](https://docs.google.com/spreadsheets/d/1-m_8pm_s2gfpSAkMF0IYHNjKvWjqDe2d__CrbpjBxFA/edit?usp=sharing).)




For most projects that I’m reasonably sure that I’ll be the only developer on, I use [Haskell](https://www.haskell.org/). This is a [functional](http://en.wikipedia.org/wiki/Functional_programming), [statically typed](http://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages) programming language with a (partially deserved) reputation for being difficult. However, I find that it gives me a nice balance of safety and flexibility, of power and expressiveness.




Given Haskell’s reputation, the previous sentence probably seems to border on insanity. Hopefully this post will prove this at least partially correct and will highlight some of the nicer aspects of working in Haskell. It leverages types to provide some assurances that the data is well-formed and consistent. This means I can perform data validation quickly and easily, and that helps everyone.
 
> This post is actually runnable Haskell. If you have the [GHC](https://www.haskell.org/ghc/) compiler installed you can copy and paste this post into a file, say `Validating.lhs`, and run it from the command line:

>     <code class="sourceCode bash">$ <span class="kw">runhaskell</span> Validating.lhs contribDB_1982.csv</code>

> However, to follow this post, you don’t need to know Haskell. I’ll try to explain enough of the concepts and syntax that matter as they come up, so that anyone familiar with computer programming should be able to follow along without getting into the weeds of exactly what’s happening on each line.

> So first some pre-amble and boilerplate. This just makes available the libraries that we’ll use.

    <code class="sourceCode haskell">
    <span class="fu">></span> <span class="ot">{-# LANGUAGE OverloadedStrings #-}</span>
    <span class="fu">></span>
    <span class="fu">></span> <span class="co">-- If you want more details about the code, including brief</span>
    <span class="fu">></span> <span class="co">-- explanations of the syntax, you've come to the right place.</span>
    <span class="fu">></span> <span class="co">-- Pay attention to the comments. This still isn't a tutorial</span>
    <span class="fu">></span> <span class="co">-- on Haskell, but hopefully you'll have a more detailed</span>
    <span class="fu">></span> <span class="co">-- understanding of what's happening.</span>
    <span class="fu">></span>
    <span class="fu">></span> <span class="co">-- First, Haskell code is kept in modules. Executable files are</span>
    <span class="fu">></span> <span class="co">-- in the `Main` module.</span>
    <span class="fu">></span> <span class="kw">module</span> <span class="dt">Main</span> <span class="kw">where</span>
    <span class="fu">></span>
    <span class="fu">></span> <span class="co">-- Import statements make the code from these modules available</span>
    <span class="fu">></span> <span class="co">-- in this module. Qualified imports make the code available</span>
    <span class="fu">></span> <span class="co">-- under an alias (e.g., Data.ByteString.Lazy is aliased to B).</span>
    <span class="fu">></span> <span class="kw">import qualified</span> <span class="dt">Data.ByteString.Lazy</span> <span class="kw">as</span> <span class="dt">B</span>
    <span class="fu">></span> <span class="kw">import           </span><span class="dt">Data.Csv</span>
    <span class="fu">></span> <span class="kw">import qualified</span> <span class="dt">Data.Text</span>            <span class="kw">as</span> <span class="dt">T</span>
    <span class="fu">></span> <span class="kw">import qualified</span> <span class="dt">Data.Vector</span>          <span class="kw">as</span> <span class="dt">V</span>
    <span class="fu">></span> <span class="kw">import           </span><span class="dt">System.Environment</span></code>




To validate the data, we just need to follow the same steps that we would to load it. Those steps are:






  1. Define the data that you want to use;


  2. Define how to read it from a row of CSV data; and


  3. Read the input.



![Profit!](http://static.scholarslab.org/wp-content/uploads/2015/03/gnomes_plan.gif)Profit!



That’s it. In fact, the last item is so inconsequential that we’ll skip it. But let’s see how the rest of it works.




## Defining the Data




First we need to define the data. We do this using _types_. If you only know languages like Ruby, JavaScript, or Python, you may be unfamiliar with types. Basically, they specify what your data will look like. For example, they might specify that a `Person` data instance has a `name` string field and an `age` integer field.




If you come from Java or C#, you know what types are, but Haskell uses them very differently. In Haskell, types are used to express, encode, and enforce the requirements of your program as much as possible. The guideline is that invalid program states should not be expressible in the types you define. To help with that, some of the loopholes in Java’s type system have been closed (looking at you, `null`): this makes these specifications more meaningful. And because Haskell employs type inference, you also don’t need to actually declare the type of every little thing, so you get more benefit for less work.




In short, types are how we specify what data we’re interested in.




At this point in the process, programming in Haskell is a typical data modeling exercise. But it’s also the foundation for the rest of this post, so we’ll linger here.




Before we define the data types, we’ll first define some aliases. These aren’t really enforced, but they make the data types that use these more clear.



    
    <code class="sourceCode haskell">
    <span class="fu">></span> <span class="kw">type</span> <span class="dt">OrgName</span> <span class="fu">=</span> <span class="dt">T.Text</span>
    <span class="fu">></span> <span class="kw">type</span> <span class="dt">Year</span>    <span class="fu">=</span> <span class="dt">Int</span>
    <span class="fu">></span> <span class="kw">type</span> <span class="dt">Amount</span>  <span class="fu">=</span> <span class="dt">Double</span></code>




The first data type that we’ll create is `Party`. This will be similar to enumerations in other languages, but in Haskell they’re just regular data types. A `Party` can be either a `Dem` (Democrat), `GOP` (Republican), `Independent`, or `Unknown`.



    
    <code class="sourceCode haskell">
    <span class="fu">></span> <span class="co">-- This statement says that you can make a value of type Party </span>
    <span class="fu">></span> <span class="co">-- using any of the constructors listed (separated by pipes).</span>
    <span class="fu">></span> <span class="co">-- In this case, none of the constructors take extra data, so</span>
    <span class="fu">></span> <span class="co">-- the semantics comes soley from which constructor is chosen.</span>
    <span class="fu">></span> <span class="kw">data</span> <span class="dt">Party</span> <span class="fu">=</span> <span class="dt">Dem</span> <span class="fu">|</span> <span class="dt">GOP</span> <span class="fu">|</span> <span class="dt">Independent</span> <span class="fu">|</span> <span class="dt">Unknown</span></code>




We want to know what kind of entity is receiving the contribution. However, we don’t actually care about who the recipient was: we just want to distinguish between candidates, committees, and state-level elections. We’ll use the `ContribEntry` data type for this information.




The following declaration states that a `ContribEntry` can be either a `Candidate`, which must have year information and party information; a `Committee`, which must have only a year; or a `StateLevel`, which must have a year and a state code.



    
    <code class="sourceCode haskell">
    <span class="fu">></span> <span class="co">-- This shows how values are given types. `contribYear ::</span>
    <span class="fu">></span> <span class="co">-- !Year`, says that the `contribYear` field must contain</span>
    <span class="fu">></span> <span class="co">-- values of type `Year`. The exclamation mark tells the</span>
    <span class="fu">></span> <span class="co">-- Haskell compiler to execute this value immediately. Unlike</span>
    <span class="fu">></span> <span class="co">-- most other languages, Haskell will normally wait to</span>
    <span class="fu">></span> <span class="co">-- evaluate expressions until absolutely necessary.</span>
    <span class="fu">></span> <span class="kw">data</span> <span class="dt">ContribEntry</span>
    <span class="fu">></span>         <span class="fu">=</span> <span class="dt">Candidate</span>  {<span class="ot"> contribYear ::</span> <span class="fu">!</span><span class="dt">Year</span>,<span class="ot"> contribParty ::</span> <span class="fu">!</span><span class="dt">Party</span> }
    <span class="fu">></span>         <span class="fu">|</span> <span class="dt">Committee</span>  {<span class="ot"> contribYear ::</span> <span class="fu">!</span><span class="dt">Year</span> }
    <span class="fu">></span>         <span class="fu">|</span> <span class="dt">StateLevel</span> {<span class="ot"> contribYear ::</span> <span class="fu">!</span><span class="dt">Year</span>,<span class="ot"> stateCode ::</span> <span class="fu">!</span><span class="dt">T.Text</span> }</code>




Each row of the data file will have information about a single contribution made by an individual or organization. Because we’re primarily interested in the data from organizations, this will be collected in an `OrgContrib` data type. It will hold the organization’s name (`orgContribName`), its district (`orgDistrict10s`), the contribution information (`orgContribEntry`), and the amount of the contribution (`orgContribAmount`).



    
    <code class="sourceCode haskell">
    <span class="fu">></span> <span class="kw">data</span> <span class="dt">OrgContrib</span>
    <span class="fu">></span>          <span class="fu">=</span> <span class="dt">OrgContrib</span>
    <span class="fu">></span>          {<span class="ot"> orgContribName   ::</span> <span class="fu">!</span><span class="dt">OrgName</span>
    <span class="fu">></span>          ,<span class="ot"> orgDistrict10s   ::</span> <span class="fu">!</span><span class="dt">T.Text</span>
    <span class="fu">></span>          ,<span class="ot"> orgContribEntry  ::</span> <span class="fu">!</span><span class="dt">ContribEntry</span>
    <span class="fu">></span>          ,<span class="ot"> orgContribAmount ::</span> <span class="fu">!</span><span class="dt">Amount</span>
    <span class="fu">></span>          }</code>




That’s it. We’ve now defined the data we’re interested in. On top of the guarantees that types allow the programming language to enforce, this exercise is also helpful because it clarifies what we want from the data and helps us better understand the domain that we’re working in.




## Data from CSV




However, we haven’t connected this data with the CSV file yet. Let’s do that now.




To make this happen, we’ll need to take the data types that we just defined and define instances of `FromField` for ones that are populated from a single field, like `Party`, and `FromNamedRecord` for others, which are built from an entire row.




`FromField` and `FromNamedRecord` are [type classes](http://en.wikipedia.org/wiki/Type_class). In object-oriented terms, these are similar to small interfaces, some only declaring one or two methods. Data types can implement the type classes that make sense, but omit the ones that do not.




In this case these type classes define what data types can be read from a row of CSV and how that should happen.




`Party` is the first data type we’ll tackle. It only reads a single field, so we’ll define `FromField`. In the CSV file, the data is encoded with numeric codes, which we’ll change into `Party` values.



    
    <code class="sourceCode haskell">
    <span class="fu">></span> <span class="co">-- This defines a instance of `FromField` for `Party`.</span>
    <span class="fu">></span> <span class="co">-- `parseField` is the only method. Multiple listings for this</span>
    <span class="fu">></span> <span class="co">-- function, combined with the string literals in place of the</span>
    <span class="fu">></span> <span class="co">-- parameter, means that the method acts as a big case</span>
    <span class="fu">></span> <span class="co">-- statement on its one parameter. When the function is passed</span>
    <span class="fu">></span> <span class="co">-- the string "100", the first definition will be used. The</span>
    <span class="fu">></span> <span class="co">-- last clause, with the underscore, is a catch-all, in which</span>
    <span class="fu">></span> <span class="co">-- the parameter's value will be ignored.</span>
    <span class="fu">></span> <span class="kw">instance</span> <span class="dt">FromField</span> <span class="dt">Party</span> <span class="kw">where</span>
    <span class="fu">></span>     parseField <span class="st">"100"</span> <span class="fu">=</span> return <span class="dt">Dem</span>
    <span class="fu">></span>     parseField <span class="st">"200"</span> <span class="fu">=</span> return <span class="dt">GOP</span>
    <span class="fu">></span>     parseField <span class="st">"328"</span> <span class="fu">=</span> return <span class="dt">Independent</span>
    <span class="fu">></span>     <span class="co">-- This catch-all is probably a bad idea....</span>
    <span class="fu">></span>     parseField _     <span class="fu">=</span> return <span class="dt">Unknown</span></code>




Notice my comment on the next to last line. Having a catch-all field like this introduces some [code smell](http://en.wikipedia.org/wiki/Code_smell), and it weakens the type-safety of the field. A better practice would be to define a `Party` constructor for every numeric code and throw an error when we find something unexpected. Since we’re only interested here in two parties, that would be overkill, so in this case we’ll be more flexible.




Now we can define how to read `ContribEntry` data. This is complicated because we have to look at the value of the `recipient_type` field in order to figure out which constructor to use.




We’ll also define a utility function, `defaulting`, that defaults empty strings to a given value.



    
    <code class="sourceCode haskell">
    <span class="fu">></span> <span class="co">-- This defines the function defaulting. The first line is the</span>
    <span class="fu">></span> <span class="co">-- type value. The definition of `defaulting` is a more</span>
    <span class="fu">></span> <span class="co">-- complicated case statement that first tests `T.null v`</span>
    <span class="fu">></span> <span class="co">-- (i.e., that it's empty), and `otherwise` is the "else" part</span>
    <span class="fu">></span> <span class="co">-- of the statement.</span>
    <span class="fu">></span><span class="ot"> defaulting ::</span> <span class="dt">T.Text</span> <span class="ot">-></span> <span class="dt">T.Text</span> <span class="ot">-></span> <span class="dt">T.Text</span>
    <span class="fu">></span> defaulting d v <span class="fu">|</span> T.null v  <span class="fu">=</span> d
    <span class="fu">></span>                <span class="fu">|</span> otherwise <span class="fu">=</span> v
    <span class="fu">></span>
    <span class="fu">></span> <span class="kw">instance</span> <span class="dt">FromNamedRecord</span> <span class="dt">ContribEntry</span> <span class="kw">where</span>
    <span class="fu">></span>     parseNamedRecord m <span class="fu">=</span> <span class="kw">do</span>
    <span class="fu">></span>         <span class="co">-- Read the recipient_type field. The `.:` operator</span>
    <span class="fu">></span>         <span class="co">-- reads a specific field from the CSV row.</span>
    <span class="fu">></span>         rtype <span class="ot"><-</span> m <span class="fu">.:</span> <span class="st">"recipient_type"</span>
    <span class="fu">></span>         <span class="co">-- If recipient_type is empty, give it a default value</span>
    <span class="fu">></span>         <span class="co">-- of "CAND", and then branch on that.</span>
    <span class="fu">></span>         <span class="kw">case</span> defaulting <span class="st">"CAND"</span> rtype <span class="kw">of</span>
    <span class="fu">></span>             <span class="st">"CAND"</span> <span class="ot">-></span> <span class="kw">do</span>
    <span class="fu">></span>                 <span class="co">-- Read the cycle (year) and recipient_party fields</span>
    <span class="fu">></span>                 cycle <span class="ot"><-</span> m <span class="fu">.:</span> <span class="st">"cycle"</span>
    <span class="fu">></span>                 party <span class="ot"><-</span> m <span class="fu">.:</span> <span class="st">"recipient_party"</span>
    <span class="fu">></span>                 <span class="co">-- Create a Candidate</span>
    <span class="fu">></span>                 return (<span class="dt">Candidate</span> cycle party)
    <span class="fu">></span>             <span class="st">"COMM"</span> <span class="ot">-></span> <span class="kw">do</span>
    <span class="fu">></span>                 <span class="co">-- Read the cycle and return a Committe</span>
    <span class="fu">></span>                 cycle <span class="ot"><-</span> m <span class="fu">.:</span> <span class="st">"cycle"</span>
    <span class="fu">></span>                 return (<span class="dt">Committee</span> cycle)
    <span class="fu">></span>             r <span class="ot">-></span> <span class="kw">do</span>
    <span class="fu">></span>                 <span class="co">-- Everything else is a state-level contribution.</span>
    <span class="fu">></span>                 <span class="co">-- Get the cycle and return that.</span>
    <span class="fu">></span>                 cycle <span class="ot"><-</span> m <span class="fu">.:</span> <span class="st">"cycle"</span>
    <span class="fu">></span>                 return (<span class="dt">StateLevel</span> cycle r)</code>




(You might be wondering why I haven’t needed to define a `FromField` for `Year` for the “cycle” fields. Remember that `Year` is just an alias for `Int`, and the CSV library already defines `FromField` for the `Int` type.)




We can finally define the instance for `OrgContrib`. After the complexity of `ContribEntry`, this one will be much simpler. We’ll extract the values for a few fields, parse the `ContribEntry`, and then create and return the `OrgContrib` value.



    
    <code class="sourceCode haskell">
    <span class="fu">></span> <span class="kw">instance</span> <span class="dt">FromNamedRecord</span> <span class="dt">OrgContrib</span> <span class="kw">where</span>
    <span class="fu">></span>     parseNamedRecord m <span class="fu">=</span> <span class="kw">do</span>
    <span class="fu">></span>         name     <span class="ot"><-</span> m <span class="fu">.:</span> <span class="st">"contributor_name"</span>
    <span class="fu">></span>         district <span class="ot"><-</span> m <span class="fu">.:</span> <span class="st">"contributor_district_10s"</span>
    <span class="fu">></span>         contrib  <span class="ot"><-</span> parseNamedRecord m
    <span class="fu">></span>         amount   <span class="ot"><-</span> m <span class="fu">.:</span> <span class="st">"amount"</span>
    <span class="fu">></span>         return (<span class="dt">OrgContrib</span> name district contrib amount)</code>




With these in place, we can read the data and have it verified at the same time. For example, if the file reads correctly, I know that the `Year` data are integers and that `Party` fields contain valid data.




And that’s really all there is to it. Below the end of the article, I’ve included a function to read the CSV data from a file and the `main` function, which controls the whole process. However, reading and validating the data has already been taken care of.




Of course, while these types provide reasonable validation, you could get much better, depending on how you define your types and how you parse the incoming data. (For example, you could only allow valid state codes for `StateLevel` or limit years to a given range.)




If you’re wondering about tests, the implementations of `FromField` and `FromNamedRecord` would be good to have tests for. However, the parts of the program’s requirements that are enforced in the types don’t really need testing; for example, I wouldn't test that party fields will always be parsed as a `Party`.




Types also come in handy in other circumstances: when you’ve left the code for a while and need to get back into it, they provide a minimum amount of guidance; and when you need to refactor, they act as a base-line set of regression tests, to tell you when you’ve broken something.




Overall, I find that this small program shows how Haskell can provide a lot of power and expressivity for relatively little code.




But the immediate benefit in this case is that I was able to provide John more assurances about his data, and to provide them more quickly. It’s a nice example of leveraging types to write better programs that provide real-world benefits.




The full code for this project is in my [popvox-scrape](https://github.com/erochest/popvox-scrape) repository. Feel free to check it out.





* * *



    
    <code class="sourceCode haskell">
    <span class="fu">></span><span class="ot"> readData ::</span> FilePath <span class="ot">-></span> <span class="dt">IO</span> (<span class="dt">Either</span> <span class="dt">String</span> (<span class="dt">Header</span>, <span class="dt">V.Vector</span> <span class="dt">OrgContrib</span>))
    <span class="fu">></span> readData filename <span class="fu">=</span> <span class="kw">do</span>
    <span class="fu">></span>     rawData <span class="ot"><-</span> B.readFile filename
    <span class="fu">></span>     return (decodeByName rawData)
    <span class="fu">></span>
    <span class="fu">></span><span class="ot"> main ::</span> <span class="dt">IO</span> ()
    <span class="fu">></span> main <span class="fu">=</span> <span class="kw">do</span>
    <span class="fu">></span>     args <span class="ot"><-</span> getArgs
    <span class="fu">></span>     <span class="kw">case</span> args <span class="kw">of</span>
    <span class="fu">></span>         [filename] <span class="ot">-></span> <span class="kw">do</span>
    <span class="fu">></span>             dataRows <span class="ot"><-</span> readData filename
    <span class="fu">></span>
    <span class="fu">></span>             <span class="kw">case</span> dataRows <span class="kw">of</span>
    <span class="fu">></span>                 <span class="dt">Left</span> err <span class="ot">-></span> putStrLn (<span class="st">"ERROR: "</span> <span class="fu">++</span> err)
    <span class="fu">></span>                 <span class="dt">Right</span> (_, rows) <span class="ot">-></span> putStrLn (  <span class="st">"SUCCESS: "</span>
    <span class="fu">></span>                                             <span class="fu">++</span> show (V.length rows)
    <span class="fu">></span>                                             <span class="fu">++</span> <span class="st">" read."</span>)
    <span class="fu">></span>
    <span class="fu">></span>         _ <span class="ot">-></span> putStrLn <span class="st">"usage: runhaskell Validate.lhs data-file.csv"</span></code>



