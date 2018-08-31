---
title: "Progress Log"
permalink: /
---

## Progress Log

<ul>
  {% for post in site.posts %}
    <li>
       <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} | {{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
