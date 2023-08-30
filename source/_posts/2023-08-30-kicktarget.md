---
title: Kick Mode & Target Mode
---
## Kick Mode
Contoh singkat tentang kick, socket dan loop didalam aplikasi Multigram. Ditulis dengan metode pengiriman data secara struktural dari atas ke bawah dari troop ke enemy berupa 3 troop vs 3 enemy dalam duel, dengan k/s/l 10/20/30.
``` php
Delay kick: delay setelah ID mengirim data kick
Delay socket: delay sebelum ID selanjutnya mengirim data kick
Delay loop: delay sebelum troop mengulang kembali dari awal
```

### Kick mode 1 vs 1
|ID troop|Data sent & delay|ID enemy|Note|
|---|---|---|---|
|troop1| kick =>|enemy1|awal|
|| kick delay 10|||
|| socket delay 20||||
|troop2|kick =>|enemy2|
|| kick delay 10||
|| socket delay 20|||
|troop3|kick =>|enemy3|
|| kick delay 10||
|| socket delay 20|||
|| loop delay 30||kembali ke awal|

### Kick mode 1 vs 10

|ID troop|Data sent & delay|ID enemy|Note|
|---|---|---|---|
|troop1|kick =>|enemy1|awal|
|| kick delay 10||
|troop1|kick =>|enemy2||
|| kick delay 10||
|troop1|kick =>|enemy3||
|| kick delay 10||
||socket delay 20||
|troop2|kick =>|enemy1||
|| kick delay 10||
|troop2|kick =>|enemy2||
|| kick delay 10||
|troop2|kick =>|enemy3||
|| kick delay 10||
||socket delay 20||
|troop3|kick =>|enemy1||
|| kick delay 10||
|troop3|kick =>|enemy2||
|| kick delay 10||
|troop3|kick =>|enemy3||
|| kick delay 10||
||socket delay 20||
||loop delay 30||kembali ke awal|

### Kick mode 10 vs 1

|ID troop|Data sent & delay|ID enemy|Note|
|---|---|---|---|
|troop1|kick =>|enemy1|awal|
|| kick delay 10||
||socket delay 20||
|troop2|kick =>|enemy1||
|| kick delay 10||
||socket delay 20||
|troop3|kick =>|enemy1||
|| kick delay 10||
||socket delay 20||
|troop1|kick =>|enemy2||
|| kick delay 10||
||socket delay 20||
|troop2|kick =>|enemy2||
|| kick delay 10||
||socket delay 20||
|troop3|kick =>|enemy2||
|| kick delay 10||
||socket delay 20||
|troop1|kick =>|enemy3||
|| kick delay 10||
||socket delay 20||
|troop2|kick =>|enemy3||
|| kick delay 10||
||socket delay 20||
|troop3|kick =>|enemy3||
|| kick delay 10||
||socket delay 20||
||loop delay 30||kembali ke awal

## Target Mode
Pengurutan list musuh dalam duel, di kick dari atas ke bawah.
|Ascending|Descending|Even|Odd|Random|
|---------|----------|----|---|------|
|enemy1|enemy10|enemy10|enemy9|acak|
|enemy2|enemy9|enemy8|enemy7|acak|
|enemy3|enemy8|enemy6|enemy5|acak|
|enemy4|enemy7|enemy4|enemy3|acak|
|enemy5|enemy6|enemy2|enemy1|acak|
|enemy6|enemy5|enemy9|enemy10|acak|
|enemy7|enemy4|enemy7|enemy8|acak|
|enemy8|enemy3|enemy5|enemy6|acak|
|enemy9|enemy2|enemy3|enemy4|acak|
|enemy10|enemy1|enemy1|enemy2|acak|
