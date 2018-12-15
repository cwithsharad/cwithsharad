---
layout: blog
title: Blog
image: "../assets/page_images/blog.jpg"
slogan1: "So you are here..."
slogan2: "Get started !!!!"
---


<div class="main">
		<ul class="blog-list">
{% for post in paginator.posts %}
<li>
	<figure class="" >
	
{% if post.image %}
<a href="{{ post.url }}" title="" style="background-image: url({{ post.image }})"></a>
{% else %}
<a href="{{ post.url }}" title="" style="background-image: url({{ site.baseurl }}assets/post_images/{{post.post_for}}.png)"></a>
</figure>
<div class="blog-content">            
<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>            
<ul>
<li>
<time>
<span class="posted-on">
<time>
<time class="entry-date published">{{ post.date | date_to_string }}</time>
</time>
</span>
</time>
</li>
</ul>
<p>{{ post.content | strip_html | truncatewords:30 }}</p>
</div>
</li>
{% endfor %}	
</ul>

<!-- PAGINATION -->
<nav class="navigation pagination" role="navigation">
<!-- pagination -->
{% if paginator.total_pages > 1 %}
<div class="pagination"> 
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&laquo; Prev</a>
  {% else %}
    <span>&laquo; Prev</span>
  {% endif %}

  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
      <span class="webjeda">{{ page }}</span>
    {% elsif page == 1 %}
      <a href="/">{{ page }}</a>
    {% else %}
      <a href="{{ site.paginate_path | prepend: site.baseurl | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a>
    {% endif %}
  {% endfor %}

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Next &raquo;</a>
  {% else %}
    <span>Next &raquo;</span>
  {% endif %}
</div>
{% endif %}                        
</nav>
<style>
.pagination a, .pagination span {
    padding: 7px 18px;
    border: 1px solid #eee;
    margin-left: -2px;
    margin-right: -2px;
    background-color: #ffffff;
    display: inline-block;
  }

.pagination a {    
    &:hover {
        background-color: #f1f1f1;
        color: #333;
    }
 }

.pagination {
    text-align: center;
 }
</style>


</div>
