--- Create Database ---
create database skilvulbookstore;

--- Use Database ---
use skilvulbookstore;

--- Create Table ---
create table penerbit (id int not null auto_increment primary key,
    -> nama varchar(50),
    -> kota varchar(50) 
    -> );

--- Create Table ---
create table penulis (id int(10) not null auto_increment primary key,
    -> nama varchar(50),
    -> kota varchar(50)
    -> );

--- Create Table ---
create table buku ( id int not null auto_increment, 
    ->     ISBN varchar(50), 
    ->     judul varchar(50), 
    ->     harga int, 
    ->     stock int, 
    ->     penulis int, 
    ->     penerbit int, 
    ->     foreign key (penulis) references penulis(id),  
    ->     foreign key (penerbit) references penerbit(id) ,
    ->     constraint pk_buku primary key (id) );

--- Insert ---
insert into `penulis` (`id`, `nama`, `kota`) values
    (null, 'babas', 'cikampek'), 
    (null, 'wibi', 'purwakarta'),
    (null, 'putri', 'depok'),
    (null, 'riani', 'kepulaun riau'), 
    (null,'diar', 'bogor'), 
    (null, 'qimore', 'depok');

---insert ---
INSERT INTO `penerbit` (`id`, `nama`, `kota`) VALUES 
    (null, 'riani', 'kepri'), 
    (null, 'putri', 'depok'), 
    (null, 'bastian', 'bandung'), 
    (null, 'dyna', 'pasuruan'),
    (null, 'rafly', 'bekasi'),
    (null, 'frensi', 'bali'),
    (null, 'wibi', 'cikampek'),
    (null, 'diar', 'bogor');

--- insert ---
insert into `buku` (`id`, `ISBN`, `judul`, `harga`, `stock`, `penulis`, `penerbit`) values 
    (null, '12', 'atomic habbit', '120000', '50', '6', '8'), 
    (null, '21', 'design your life', '39250', '50', '6', '8'), 
    (null, '45', '7 habbit', '49250', '50', '6', '8'), 
    (null, '97', 'critical eleven', '50250', '40', '6', '8');

--- join ---
select *
from buku
inner join penerbit
on buku.id = penerbit.id;

--- left ---
select *
from buku
left join penerbit
on buku.id = penerbit.id;

--- right ---
select *
from buku
right join penerbit
on buku.id = penerbit.id;

--- max ---
select max(harga)
from buku
where stock < 10;

--- min ---
select min(harga)
from buku;

--- count ---
select count(harga)
from buku
where harga < 10000;