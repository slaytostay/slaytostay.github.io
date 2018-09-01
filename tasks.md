---
title: "Task Tracker"
layout: public
permalink: /tasks/
---

## Task Tracker

<div style="white-space: nowrap;">
| # | Task | Monster | Amount | Area |
| ---:| --- | --- | ---:| --- |
{% for task in site.data.tasks %}| {{ forloop.index }} | {{ task.task }} | {{ task.monster }} | {{ task.amount }} | {{ task.area }} |
{% endfor %}
</div>
