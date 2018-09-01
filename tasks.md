---
title: "Task Tracker"
layout: public
permalink: /tasks/
---

## Task Tracker

<table>
  <thead>
    <tr>
      <th style="text-align: right">#</th>
      <th>Task</th>
      <th>Monster</th>
      <th style="text-align: right">Amount</th>
      <th>Area</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {% for task in site.data.tasks %}
      <td>{{ forloop.index }}</td><td nowrap>{{ task.task }}</td><td nowrap>{{ task.monster }}</td><td>{{ task.amount }}</td><td nowrap>{{ task.area }}</td>
      {% endfor %}
    </tr>
  </tbody>
</table>

<div >
| # | Task | Monster | Amount | Area |
| ---:| --- | --- | ---:| --- |
{% for task in site.data.tasks %}| {{ forloop.index }} | {{ task.task }} | {{ task.monster }} | {{ task.amount }} | {{ task.area }} |
{% endfor %}
</div>
