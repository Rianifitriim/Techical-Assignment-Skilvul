1. What does git clean do? **fatal: clean.requireForce defaults to true and neither -i, -n, nor -f given; refusing to clean**
**tidak bisa digunakan git clean karena tidak ada -i,-n atau -f**
2. What do the -d and -f flags for git clean do? **tidak bisa menggunakan -d karena hanya dapat menggunakan -i,-n atau -f** 
**git clean -f menghapus file yang belum ditambahkan kedalam staging area**
3. What git command creates a branch?**git branch**
4. What is the difference between a fast-forward and recursive merge? **fast-forward ialah ketika, daripada membangun komit gabungan, git hanya memindahkan pointer cabang Anda ke titik di komit yang masuk.** 
**merge untuk membuat branch yang bercabang menjadi satu kembali atau dengan kata lain mengintegrasikan kembali branch tersebut menjadi satu**
5. What git command changes to another branch?**git checkout**
6. How do you remove modified or deleted files from the working directory? **git rm**
7. What git command deletes a branch? **git branch -d**
8. What does the git diff command do? **fungsinya untuk melihat perbedaan perubahan di revisi**
9. How do you remove files from the staging area? **git clean -f**
10.How do merge conflicts happen?**ketika 2 branch memodifikasi baris kode yang sama**