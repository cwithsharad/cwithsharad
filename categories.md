---
title: Categories
permalink: "/categories/"
layout: page
---

<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
    <p></p>
    
    <h6 class="category-head">{{ category_name }}</h6>
    <a name="{{ category_name | slugize }}"></a>
    {% for post in site.categories[category_name] %}
    <article class="archive-item">
      <li><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></li>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>
