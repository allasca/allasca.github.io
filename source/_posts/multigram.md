---
title: Multigram
date: 2023-08-29 00:00:00
---

[Multigram](https://play.google.com/store/apps/details?id=id.allasca.multigram) adalah sebuah aplikasi multi username dengan menggunakan [API](https://en.wikipedia.org/wiki/API) dari [Badgeni.us](http://badgeni.us/) yang merupakan official dari [Miggi](https://miggi.id/), dengan sejumlah modifikasi fungsi yang disengaja.
<!-- more -->
## Quick Start

Semua delay didalam aplikasi ini menggunakan satuan milidetik, kecuali dalam pingpong delay menggunakan detik (pingpong delay standart: 58-59 detik).

| Detik | Milidetik |Detik | Milidetik |
|-----|-----|-----|-----|
| 50 | 50000 | 0,5 | 500 |
| 10 | 10000 |0,1 | 100 |
| 1 | 1000 |0,01 | 10 |

Jika terdapat error dalam penggunaan App hidupkan fitur Lock in Ram yang ada di bagian setting.
Apabila masih terdapat error gunakan tips di link berikut [https://dontkillmyapp.com/](https://dontkillmyapp.com/)

### Tab Auth

Sebuah username dan password akun Miggi diperlukan untuk menggunakan aplikasi Multigram, disarankan bukan akun master. Apabila sudah melakukan login auth dan mendapatkan jawaban
```
NOT AUTHORIZED atau LOADING
```
Sila kontak saya di
```
1. Chatroom Multigram
2. Email ke y.allasca@gmail.com
```

### Tab Troop

Untuk memasukkan multi kedalam aplikasi gunakan icon gear. Isi multi dengan format **username1:password1** dengan pembatas antara username menggunakan koma, di username terakhir tidak perlu ada koma atau multi tidak dapat disimpan. Berikan nama untuk set troop multi dalam kolom Title.
```
puisisenja01.txt:password123, puisisenja02.txt:password123, puisisenja03.txt:password123, puisisenja04.txt:password123, puisisenja05.txt:password123, puisisenja06.txt:password123, puisisenja07.txt:password123, puisisenja08.txt:password123, puisisenja09.txt:password123, puisisenja10.txt:password123
```
Tidak ada batasan jumlah username dalam memasukkan set troop.

### Tab Spy

| Opsi | Fungsi |
|-----|-----|
| List user| Mengambil participants dalam room |
| Enter | Memasukkan multi dalam room |
| Leave | Mengeluarkan multi dari room|
|Kick selected| Kick manual user yang sudah dicentang|
|All| Mencentang semua isi room|
|None| Menghapus semua centang|
|List target| Manual list target series multi menggunakan pola (DUEL)|
|@|Auto list target tanpa pola (DUEL)|
|Auto vote|Auto vote ketika ada yang start di room|
|Kick selected delay|Delay untuk manual kick selected|
|Safe username|Username tidak akan divote ketika auto vote menyala|
|Enter delay| Delay ketika multi masuk room|
|Leave delay|Delay ketika multi keluar room|

### Tab Duel

| Opsi | Fungsi |
|-----|-----|
|Enable duel | Aktifkan ini sebelum wasit melakukan start kick|
|Kick mode| Terdapat 3 kick mode dalam aplikasi ini, standart 1 vs 10|
|Target mode| Terdapat 5 cara pengurutan multi musuh|
|1st k/s/l|Delay kick, socket, dan loop|
|2nd k/s/l|Delay kick, socket, loop, dan delay timer perubahan|
|3rd k/s/l|Delay kick, socket, loop, dan delay timer perubahan|
|Auto vote|Delay troop untuk memberikan vote pada musuh dalam waktu tertentu jika belum kicked|
|Suicide vote|Delay troop untuk memberikan vote bunuh diri dalam waktu tertentu jika belum kicked|
|Auto stop|Menghentikan duel dalam delay waktu tertentu dihitung dari mulainya timer kicking|
|Ratio enemy/troop| Menghentikan duel ketika sisa enemy/troop kurang dari kebutuhan vote (more needed)|
|Dynamic k/s/l|Delay dinamis ketika troop/enemy kicked dengan tujuan mempertahankan total delay supaya tidak suspended. Delay dinamis automatis menambah delay sedikit demi sedikit dibalik layar|
|Timer kicking|Delay aplikasi memulai melakukan kick. Exp pada detik ke 59 (1 detik sebelum failed) maka delay adalah 59000|

### Tab Tool
| Opsi | Fungsi |
|-----|-----|
|Starter username|Untuk membantu start atau membantu mengisi room menjadi 23 (DUEL)|
|Auto enter troop|Memberikan perintah enter troop secara berkala pada delay tertentu|
|Start roll|Sudah tidak berfungsi|
|Ping latency|Menghitung jarak data dari android ke server dan kembali ke android dalam satuan milidetik|

### Tab Log

Membaca log kick ketika duel, dapat di aktifkan di bagian setting App. Tidak disarakan hidup agar tidak membebani proses kick.