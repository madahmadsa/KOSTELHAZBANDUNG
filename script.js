// Harga kamar
const hargaKamar = {
    '101': 150000,
    '102': 150000,
    '103': 200000,
    '201': 200000,
    '202': 250000
};

// Set minimum date untuk check-in (hari ini)
window.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('check-in-date').setAttribute('min', today);
});

// Handle form check-in
document.getElementById('checkInForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const nomorIdentitas = document.getElementById('nomor-identitas').value;
    const nomorHp = document.getElementById('nomor-hp').value;
    const email = document.getElementById('email').value;
    const kamar = document.getElementById('kamar').value;
    const checkInDate = document.getElementById('check-in-date').value;
    const durasi = parseInt(document.getElementById('durasi').value);
    const catatan = document.getElementById('catatan').value;

    // Validasi
    if (!nama || !nomorIdentitas || !nomorHp || !kamar || !checkInDate || !durasi) {
        alert('Mohon lengkapi semua field yang wajib diisi!');
        return;
    }

    // Hitung total biaya
    const hargaPerMalam = hargaKamar[kamar];
    const totalBiaya = hargaPerMalam * durasi;

    // Format tanggal
    const dateObj = new Date(checkInDate);
    const tanggalFormatted = dateObj.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Tampilkan hasil
    document.getElementById('hasil-nama').textContent = nama;
    document.getElementById('hasil-kamar').textContent = kamar + ' - Rp ' + hargaPerMalam.toLocaleString('id-ID');
    document.getElementById('hasil-tanggal').textContent = tanggalFormatted;
    document.getElementById('hasil-durasi').textContent = durasi;
    document.getElementById('hasil-biaya').textContent = totalBiaya.toLocaleString('id-ID');

    // Sembunyikan form, tampilkan hasil
    document.querySelector('.form-container').style.display = 'none';
    document.getElementById('hasil-checkin').classList.remove('hidden');

    // Log data ke console (untuk testing)
    console.log('Data Check-in:', {
        nama,
        nomorIdentitas,
        nomorHp,
        email,
        kamar,
        checkInDate,
        durasi,
        catatan,
        totalBiaya
    });
});

// Reset form
function resetForm() {
    document.getElementById('checkInForm').reset();
    document.querySelector('.form-container').style.display = 'block';
    document.getElementById('hasil-checkin').classList.add('hidden');
}

// Handle form kontak
function handleKontakSubmit(event) {
    event.preventDefault();

    const namaKontak = document.getElementById('nama-kontak').value;
    const emailKontak = document.getElementById('email-kontak').value;
    const pesanKontak = document.getElementById('pesan-kontak').value;

    // Log data kontak
    console.log('Data Kontak:', {
        nama: namaKontak,
        email: emailKontak,
        pesan: pesanKontak
    });

    // Tampilkan pesan sukses
    document.getElementById('pesan-sukses').classList.remove('hidden');
    document.getElementById('formKontak').reset();

    // Sembunyikan pesan sukses setelah 5 detik
    setTimeout(() => {
        document.getElementById('pesan-sukses').classList.add('hidden');
    }, 5000);
}

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Update active navbar
            document.querySelectorAll('.navbar a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Set active navbar berdasarkan scroll position
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.navbar a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});