---
title: QGIS Auto Markir
date: 2026-01-22 16:00:00
---

Script ini digunakan untuk membuat data marking (jarak dan daftar nama anak petak) berdasarkan poligon evapot, 
dengan ketentuan cucu petak harus di-merger menjadi anak petak.
<!-- more -->
### Cara penggunaan
1. QGIS -> Plugins -> Python console -> Show editor
2. Paste code / open code (jika didownload) di editor
3. Sesuaikan parameter PETAK, ANAK_PETAK, KELAS_HUTAN dengan kolom shp
4. NAMA_USER menyesuaikan user Windows
5. Klik run/logo icon play warna hijau
6. Setelah selesai file csv akan ada di Desktop

### Update plugin
Qgis -> Plugins -> Manage and install plugins -> Install from zip

Download plugin: https://github.com/allasca/PHT-Auto-Markir/blob/main/pht_auto_markir.zip


Kode disini:
https://github.com/allasca/assets/blob/main/qgis_markeer.py
