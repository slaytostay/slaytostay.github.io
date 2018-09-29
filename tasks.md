---
title: "Task Tracker"
layout: public
permalink: /tasks/
---

## Task Tracker

<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Task</th>
      <th>Monster</th>
      <th>Amount</th>
      <th>Area</th>
    </tr>
  </thead>
  <tbody>
    {% for task in site.data.tasks %}<tr>
      <td style="text-align: right"><a href="/task/?id={{ forloop.index }}">{{ forloop.index }}</a></td><td nowrap>{{ task.task }}</td><td nowrap>{{ task.monster }}</td><td  style="text-align: right">{{ task.amount }}</td><td nowrap>{{ task.area }}</td>
    </tr>{% endfor %}
  </tbody>
</table>
