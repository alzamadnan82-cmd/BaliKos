export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Kos id</h3>
            <p className="text-sm text-slate-400">
              Platform terbaik yang menghubungkan mahasiswa dengan kos terbaik di dekat kampus, sekaligus memberdayakan pemilik dengan alat manajemen properti cerdas.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Untuk Mahasiswa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Cari Kos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cara Kerja</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Panduan Mahasiswa</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Untuk Pemilik</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Daftarkan Properti Anda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dasbor Manajemen</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sumber Daya Pemilik</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Dukungan</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Pusat Bantuan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hubungi Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Syarat dan Ketentuan</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center text-slate-500">
          &copy; {new Date().getFullYear()} Kos id. Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
