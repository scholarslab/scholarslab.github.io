# scholarslab.org
Repo for stuff related to ScholarsLab.org upgrade &amp; static site
migration.

There's [a wiki page](https://github.com/scholarslab/scholarslab.org/wiki/Rando-Ideas) if you have ideas/thoughts that don't fit well as issues.

Some common tasks:

Make a new person
```bash
rake new_person["First", "Last"]
rake new_person["Brandon", "Walsh"]
```

Make a new post given a title and an author name in the form of first_name last_name
```bash
rake new_post["Title here", "First Last"]
ex.
rake new_post["Brandon's best blog post ever", "Brandon Walsh"]
```
