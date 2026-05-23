import { Github, Instagram, Linkedin, Mail, MapPin, Phone, BookOpen, Code2, GraduationCap } from 'lucide-react';

const BiodataPage = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Biodata Mahasiswa</h1>
          <p>Profil pembuat website</p>
        </div>
      </div>

      <div className="biodata-container">
        {/* Kartu Profil */}
        <div className="biodata-card profile-card">
          <h2 className="profile-name">Veby Rokhmatul Ambiya</h2>
          <p className="profile-nim">24090119</p>
          <p className="profile-prodi">Teknik Informatika</p>
          <p className="profile-kampus">UHN</p>

          <div className="profile-contacts">
            <a href="mailto:veby@example.com" className="contact-chip">
              <Mail size={14} /> vebyambiya@gmail.com
            </a>
            <span className="contact-chip">
              <MapPin size={14} /> Bumijawa, Jawa Tengah
            </span>
            <span className="contact-chip">
              <Phone size={14} /> 085643316371
            </span>
          </div>
        </div>

        {/* Detail Biodata */}
        <div className="biodata-details">
          {/* Informasi Akademik */}
          <div className="detail-card">
            <div className="detail-header">
              <GraduationCap size={20} />
              <h3>Informasi Akademik</h3>
            </div>
            <div className="detail-grid">
              <div className="detail-item"><span>Nama Lengkap</span><strong>Veby Rokhmatul Ambiya</strong></div>
              <div className="detail-item"><span>NIM</span><strong>24090119</strong></div>
              <div className="detail-item"><span>Program Studi</span><strong>Teknik Informatika</strong></div>
              <div className="detail-item"><span>Fakultas</span><strong>Vokasi</strong></div>
              <div className="detail-item"><span>Angkatan</span><strong>2024</strong></div>
              <div className="detail-item"><span>Status</span><strong>Aktif</strong></div>
              <div className="detail-item"><span>Kampus</span><strong>Kampus Mataram – Jalan Mataram No.9, Kota Tegal</strong></div>
            </div>
          </div>

          {/* Tentang Proyek */}
          <div className="detail-card">
            <div className="detail-header">
              <BookOpen size={20} />
              <h3>Tentang Proyek</h3>
            </div>
            <p className="about-text">
              Event Management System adalah aplikasi web full-stack yang dibangun sebagai tugas
              mata kuliah Pemrograman Web. Aplikasi ini memungkinkan pengelolaan event kampus
              secara digital, meliputi kategori event, data pembicara, dan detail pelaksanaan event.
            </p>
            <p className="about-text">
              Proyek menggunakan React TypeScript + Vite di sisi frontend, Express TypeScript di backend,
              Prisma ORM dengan database Supabase PostgreSQL, serta Zustand untuk state management
              termasuk autentikasi login berbasis NIM dan Password.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodataPage;
