# KOST ELHAZ BANDUNG - Sistem Check-in Kamar Transit

## Deskripsi
Website sederhana untuk sistem check-in kamar transit "KOST ELHAZ BANDUNG" dengan antarmuka yang user-friendly dan responsif.

## Fitur Utama

### 1. **Check-in Kamar**
- Form check-in lengkap dengan validasi
- Pilihan kamar dengan harga berbeda
- Perhitungan otomatis total biaya
- Konfirmasi check-in dengan detail pemesanan

### 2. **Daftar Kamar**
- Informasi lengkap setiap kamar
- Harga per malam
- Fasilitas setiap kamar
- Grid display yang responsif

### 3. **Halaman Kontak**
- Informasi lengkap kost (alamat, telepon, email)
- Jam operasional
- Form hubungi kami

### 4. **Desain Responsif**
- Mobile-friendly
- Desktop-friendly
- Tablet-friendly

## Struktur File

```
KOSTELHAZBANDUNG/
├── index.html      # File HTML utama
├── styles.css      # File CSS untuk styling
├── script.js       # File JavaScript untuk interaktivitas
└── README.md       # File dokumentasi
```

## Cara Penggunaan

1. **Buka index.html** di browser
2. **Navigasi** menggunakan menu di atas
3. **Check-in Kamar**:
   - Isi form check-in dengan data tamu
   - Pilih kamar yang tersedia
   - Tentukan durasi menginap
   - Klik "Selesaikan Check-in"
4. **Lihat Detail Kamar** di bagian "Daftar Kamar"
5. **Hubungi Kami** menggunakan form kontak

## Harga Kamar

| Kamar | Tipe | Harga | Fasilitas |
|-------|------|-------|----------|
| 101-102 | Single | Rp 150.000/malam | Tempat tidur single, Kamar mandi dalam, Kipas angin, WiFi |
| 103-201 | Double | Rp 200.000/malam | Tempat tidur double, Kamar mandi dalam, AC, WiFi |
| 202 | Deluxe | Rp 250.000/malam | Tempat tidur double, Kamar mandi dalam, AC, TV 32", WiFi |

## Teknologi yang Digunakan

- **HTML5** - Struktur halaman
- **CSS3** - Styling dan responsive design
- **JavaScript (Vanilla)** - Interaktivitas dan validasi form

## Fitur JavaScript

### 1. Perhitungan Biaya Otomatis
- Menghitung total biaya berdasarkan harga kamar dan durasi menginap

### 2. Validasi Form
- Memastikan semua field wajib terisi
- Validasi format email
- Validasi tanggal (minimum hari ini)

### 3. Smooth Scrolling
- Navigasi halus ke setiap section
- Update navbar aktif saat scroll

### 4. Dynamic Date Range
- Minimum date untuk check-in adalah hari ini
- Format tanggal sesuai locale Indonesia

## Instalasi & Setup

### Opsi 1: Local File
1. Clone atau download repository
2. Buka `index.html` di browser

### Opsi 2: Web Server
1. Upload semua file ke web server
2. Akses melalui domain/URL

## Panduan Pengembangan

### Menambah Kamar Baru
1. Tambahkan option baru di form check-in (index.html)
2. Tambahkan entry harga di `hargaKamar` object (script.js)
3. Tambahkan card kamar di section "Daftar Kamar" (index.html)

### Mengubah Warna
Edit CSS variables di `styles.css`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... */
}
```

### Menambah Fitur
- Edit JavaScript di `script.js`
- Update HTML di `index.html`
- Tambahkan styling di `styles.css`

## Kontak

- **Email**: 021199ahmadsaepudin@gmail.com
- **Phone**: (022) 1234-5678 / 0821-1234-5678
- **Alamat**: Jalan Ahmad Yani No. 123, Bandung, Jawa Barat 40123

## Lisensi
Milik KOST ELHAZ BANDUNG © 2026. Semua hak dilindungi.

## Status
✅ Production Ready

---

**Dibuat dengan ❤️ untuk KOST ELHAZ BANDUNG**