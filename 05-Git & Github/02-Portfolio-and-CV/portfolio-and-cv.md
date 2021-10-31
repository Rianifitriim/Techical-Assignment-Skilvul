1. membuat sebuah folder kosong dengan namamu sendiri **mkdir riani**
2. membuat sebuah file dengan nama README.md, isi file tersebut dengan kalimat 
"Halo perkenalkan aku halaman utama" **nano README.md**
3. insialisasi folder tersebut dengan Git, kemudian dokumentasikan menggunakan commit dengan pesan **git init**
"Inisialisasi Git Repository" **git commit -m "Inisialisasi Git Repository"**
4. buat branch baru dengan nama cv, hal ini berguna agar histori kita tidak tercampur **git branch cv**
5. pindah branch kedalam cv **git checkout cv**, kemudian buat file dengan nama cv.txt dan isi file tersebut dengan kalimat:
"Ini adalah file CV" **nano cv.txt**
6. kemudian dokumentasikan menggunakan commit dengan pesan
"Inisialisasi CV" **git add cv.txt** **git commit -m "Inisialisasi CV"**
7. tambahkan 3 perusahaan yang akan kamu lamar, dan setiap menuliskan 1 nama perusahaan kamu harus melakukan dokumentasi menggunakan commit **git add cv.txt** **git commit -m "perusahaan 1 "** **git commit -m "perusahaan 2"** **git commit -m "perusahaan 3"**
8. kembali ke branch master **git checkout master** 
9. ubah file README.md menjadi *open README.md**
Halo perkenalkan aku halaman utama

Ini adalah update pertama pada branch master 
jangan lupa untuk mendokumentasikannya menggunakan commit dengan pesan
"update master pertama" **git add README.md** **git commit -m "update master pertama"**
10. gabungkan branch cv kedalam branch master menggunakan perintah git merge **git merge cv**
11. unggah Git Repository tersebut kedalam GitHub