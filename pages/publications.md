---
layout: page
title: Publications
permalink: /publications/
fake: true # for now
time-requirement: unknown
notes:
- Content: not started
- Style: not started
- NB: NOT a Phase 1 page
---

For any instances of making scholarship public: print or digital publications, presentations, tweet threads, blog posts, etc.

<div id="lab-grid">
{% for page in site.publications %}
  <section><a href="{{ site.url }}/publications/{{ page.slug }}"><img src="{{ site.url }}/assets/img/{{ page.slug }}.png">{{ page.title }}</a></section>
{% endfor %}

 <section>
    <p>Lorem ipsum dolor sit amet, consectetur.</p>
  </section>
  
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error aliquid reprehenderit expedita odio beatae est.</p>
  </section>
  
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur.</p>
  </section>
  
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quaerat suscipit ad.</p>
  </section>

  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nihil alias amet dolores fuga totam sequi a cupiditate ipsa voluptas id facilis nobis.</p>
  </section>

  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ut debitis dolorum earum expedita eveniet voluptatem quibusdam facere eos numquam commodi ad iusto laboriosam rerum aliquam.</p>
  </section>
  
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </section>
  
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat  architecto quis tenetur fugiat veniam iste molestiae fuga labore!</p>
  </section>
  
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit accusamus tempore at porro officia rerum est impedit ea ipsa tenetur. Labore libero hic error sunt laborum expedita.</p>
  </section>
  
  <section>
    <p>Lorem ipsum dolor sit.</p>
  </section>
  
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima asperiores eveniet vero velit eligendi aliquid in.</p>
  </section>
  
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dolorem maxime minima animi cum.</p>
  </section>
</div>