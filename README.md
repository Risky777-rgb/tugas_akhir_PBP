# Personal Portfolio Website

Website ini merupakan proyek portofolio pribadi yang menampilkan profil, karya, dan informasi kontak dengan desain modern bertema **dark mode neon**.  
Dibangun menggunakan kombinasi **HTML**, **CSS**, dan **JavaScript**, dengan dukungan library **Bootstrap** untuk tampilan responsif.

---

##  Struktur Proyek


---

##  Deskripsi Desain (CSS)

File utama: **`style.css`**

Website ini mengusung gaya **neon dark theme** dengan kombinasi warna biru elektrik dan abu-abu gelap, memberikan kesan futuristik dan profesional.

###  Bagian-Bagian Utama:

#### 1. **Global Variables dan Reset**
Mendefinisikan warna utama menggunakan variabel `:root` agar mudah diatur ulang.  
Mengatur margin, padding, dan font agar konsisten di seluruh halaman.

#### 2. **Navbar**
Menampilkan logo dan navigasi utama.  
Didesain semi-transparan dengan efek blur (`backdrop-filter: blur(5px)`) dan animasi garis bawah saat hover.

#### 3. **Home Page (index.html)**
Menampilkan bagian menu dan tombol **Explore**.  
Tombol ini memiliki efek hover bercahaya dan scroll halus menuju bagian “Featured Work”.

#### 4. **Card Portofolio**
Setiap karya ditampilkan dalam kartu dengan efek **hover neon glow** dan **animasi naik (translateY)**.  
Efek ini menonjolkan proyek dan memperindah tampilan.

#### 5. **Filter Portofolio**
Menggunakan tombol kategori untuk menyaring proyek berdasarkan tipe (Web, Design, App).  
Tombol aktif diberi efek bercahaya biru neon.

#### 6. **About Page**
Menampilkan profil, foto berbentuk **heksagonal**, bio singkat, dan daftar keahlian.  
Menggunakan warna primer untuk menonjolkan judul bagian.

#### 7. **Responsivitas**
Menggunakan media query agar tampilan tetap rapi di tablet dan ponsel.  
Misalnya, tata letak sosial media diubah menjadi kolom pada ukuran layar sedang.

---

##  Fitur Interaktif (JavaScript)

File utama: **`script.js`**

Seluruh fungsi JavaScript dijalankan setelah halaman selesai dimuat (`DOMContentLoaded`).

###  1. Filter Portofolio
Membuat sistem penyaringan proyek berdasarkan kategori.  
Menggunakan kelas `d-none` dari Bootstrap untuk menyembunyikan elemen yang tidak sesuai filter.

###  2. Smooth Scroll
Tombol **Explore** di halaman utama akan menggulirkan layar secara halus ke bagian “Featured Work”.

###  3. Formulir Kontak
Saat pengguna menekan tombol kirim, muncul pesan **alert sukses** dan input form dikosongkan kembali tanpa memuat ulang halaman.

###  4. Navbar Aktif Otomatis
Script mendeteksi halaman yang sedang dibuka (misal: `about.html`) dan memberi efek aktif pada menu navigasi yang sesuai.

---

##  Konsep Utama yang Digunakan

| Konsep | Penjelasan |
|--------|-------------|
| **DOM Manipulation** | Mengambil dan memodifikasi elemen HTML dengan `querySelector()` dan `addEventListener()` |
| **Class Management** | Menambahkan/menghapus kelas CSS dengan `classList` untuk efek dinamis |
| **Event Handling** | Menangani interaksi pengguna seperti klik dan submit |
| **CSS Variables** | Memudahkan pengaturan tema warna dan konsistensi desain |
| **Responsiveness** | Menyesuaikan tampilan dengan ukuran layar menggunakan media query |

---

##  Teknologi yang Digunakan

- **HTML5** – Struktur dan konten utama
- **CSS3** – Desain tampilan dan animasi neon
- **Bootstrap 5** – Grid system dan class utilitas seperti `d-none`
- **JavaScript (Vanilla)** – Fitur interaktif (filter, scroll, alert)
- **Google Fonts (Poppins)** – Font modern dan ringan

---

##  Tampilan (Preview)

| Halaman | Deskripsi |
|----------|------------|
|  **Home** | Menampilkan pengenalan dan tombol Explore |
|  **Portfolio** | Berisi proyek dengan sistem filter interaktif |
|  **About** | Profil pribadi dan daftar keahlian |
|  **Contact** | Formulir untuk mengirim pesan |

---

##  Cara Menjalankan Proyek

1. Unduh semua file ke dalam satu folder.  
2. Pastikan struktur folder sesuai seperti di atas.  
3. Buka `index.html` menggunakan browser (Chrome/Edge/Firefox).  
4. Navigasikan halaman melalui menu navbar.

>  Tidak memerlukan server lokal — proyek ini murni menggunakan HTML, CSS, dan JavaScript.

---

##  Kontributor

**Nama:** Miftachurrisky  
**Peran:** Pengembang dan Desainer Website  
**Tahun:** 2025  
**Deskripsi Singkat:**  
Website ini dibuat sebagai latihan sekaligus tugas proyek portofolio dengan fokus pada tampilan modern dan interaktif.

---

##  Lisensi

Proyek ini bersifat **open-source** dan dapat digunakan untuk keperluan pribadi, pembelajaran, atau pengembangan lebih lanjut.

---
![Home Page](https://github.com/Risky777-rgb/tugas_akhir_PBP/blob/main/ss/MIFTACHUR-RISKY-About-Me-10-20-2025_11_01_AM.png)
![Home Page](https://github.com/Risky777-rgb/tugas_akhir_PBP/blob/main/ss/MIFTACHUR-RISKY-Home-10-20-2025_11_00_AM.png)
![Home Page](https://github.com/Risky777-rgb/tugas_akhir_PBP/blob/main/ss/MIFTACHUR-RISKY-Portfolio-10-20-2025_11_01_AM.png)
 *"Code your future, design your identity."* 
