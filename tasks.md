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
    {% for task in site.data.tasks %}<tr>
      <td>{{ forloop.index }}</td><td nowrap>{{ task.task }}</td><td nowrap>{{ task.monster }}</td><td>{{ task.amount }}</td><td nowrap>{{ task.area }}</td>
    </tr>{% endfor %}
  </tbody>
</table>
