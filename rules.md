---
title: "Rules"
layout: public
permalink: /rules/
---

##  Rules

### 1. General Rules
1. Regular Ironman rules.
1. Must drop Tutorial Island items.
1. Must minigame teleport to Burthorpe before doing anything else.
1. Burthorpe is the only unlocked area, all other content is locked.
1. Once you got a task from Turael you can pick an area where that task monster is the strongest.
1. Once you finish the task in that area, the content within the area you finished your slayer task in is now unlocked.

### 2. Other Rules
1. Allowed to keep any monster drop on task.
1. Allowed to use any item without external resources.
1. Allowed to make use of teleports/toll gates/shortcuts/etc. to reduce time spent in locked areas when moving from area to area.
1. Allowed to do any random event.
1. Clue scroll steps must be completed in unlocked areas.
  * Clue scroll requirements such as levels, items and quests must be obtained within unlocked areas.
1. Allowed to do quests which are started in unlocked areas.
  * Quest requirements such as levels and items must be obtained within unlocked areas.
  * If a quest step is within an (eventually) unlockable area, the area must be unlocked first.
1. If all possible areas from a slayer master are unlocked, I may start quests in locked areas if they unlock new areas for that slayer master.


### 3. Areas
1. An area is 64 by 64 tiles as defined by the game itself. (Example map here: [explv.github.io](https://explv.github.io))
1. An area contains the surface region as well as the underground region.
  * To calculate this we take the region ID of the surface and add 100 to it to get the region ID of the underground region.
  * For example: Lumbridge Castle is in region 12850 and the Lumbridge Castle basement is in region 12950.
1. Regions which are not on the surface nor in the underground and do not contain any slayer monsters are unlocked by unlocking the area with the entrance to that region.
  * Everything between y=4160 and y=8896 is not surface nor underground.
  * This rule is put in place because these regions do not have an objective relation to regions on the surface, unlike underground regions.
  * For example: the Rogue's Den has no slayer monsters and y=4928 and is therefore unlocked by unlocking Burthorpe.
1. The unlocked area is based on the place where the slayer monster respawns.
1. Two areas do not have their strongest monster as monster to unlock the area.
  * Grand Exchange/Vannaka (from Moss Giant to Deadly Red Spider)
  * Mount Karuulm/Konar (from Hydra to Drake).
  * This done because the original strongest monster is only assigned by the slayer master in that area.
  * First task of the actual strongest monster must be completed in the area of the slayer master you unlocked with this rule.
  * May not kill the actual strongest monster in that area until you complete the point above.
