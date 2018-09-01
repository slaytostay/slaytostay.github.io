---
title: "Task Tracker"
layout: public
permalink: /tasks/
---

## Task Tracker

| # | Task | Monster | Amount | Area |
| ---:| --- | --- | ---:| --- |
{% for task in site.data.tasks %}| {{ forloop.index }} | {{ task.task }} | {{ task.monster }} | {{ task.amount }} | {{ task.area }} |{% endfor %}
