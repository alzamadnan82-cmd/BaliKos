import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, Star, ShieldCheck, Zap, Coffee, Wifi, User } from 'lucide-react';

const RECOMMENDED_KOS = [
  { id: 1, name: "Kos Lean", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizF8DaHKHWDYChAxL86B0UXHgN1ridN2J9BBw3CiNTcjSJ75DJlo3syAUl5DpHbaZwuwcEf3JYosXPh3VVlyOKaZMQb-BIB-Pc1EMk8V6lOnYS6KUHPOnPEglnkScQub40mYM1DIlpqYDi/s1600/desain-kamar-kost.jpg?w=600&q=80", price: "1.5Jt", distance: "5 menit ke kampus", rating: 4.8 },
  { id: 2, name: "Kos Adelia", image: "https://sgp1.digitaloceanspaces.com/www.sewakost.com-69925f5b4547e/listings/04-2018/ad18361/kost-mahasiswa-putra-918998770_large.JPG?w=600&q=80", price: "1.2Jt", distance: "10 menit ke kampus", rating: 4.7 },
  { id: 3, name: "Kos Graha 8", image: "https://www.umn.ac.id/wp-content/uploads/2022/09/Kamar-Kos.jpg?w=600&q=80", price: "1.4Jt", distance: "7 menit ke kampus", rating: 4.9 },
  { id: 4, name: "Kos Reni", image: "https://rencanamu.id/assets/file_uploaded/blog/1469719595-c360-2011-.jpg?w=600&q=80", price: "1.3Jt", distance: "5 menit ke kampus", rating: 4.6 },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Assuming the search page can handle query parameters in the future
    navigate('/search');
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://sanggahan.files.wordpress.com/2022/06/ubb.jpg" 
            alt="Kampus Universitas" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Temukan <span className="text-yellow-400">Kos</span> Ideal di Dekat Kampus
          </h1>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Cara termudah bagi mahasiswa untuk menemukan kos dan bagi pemilik untuk mengelola properti mereka dengan lancar.
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto bg-white rounded-full p-2 flex shadow-xl">
            <div className="flex-grow flex items-center px-4">
              <MapPin className="h-5 w-5 text-slate-400 mr-2" />
              <input 
                type="text" 
                placeholder="Cari berdasarkan kampus, area, atau nama kos..." 
                className="w-full text-slate-900 focus:outline-none bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              type="submit" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
            >
              <Search className="h-5 w-5" />
              Cari
            </button>
          </form>
        </div>
      </section>

      {/* Recommended Kos */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Rekomendasi Dekat Universitas Bangka Belitung</h2>
            <p className="text-slate-500 mt-1">Kos dengan rating tertinggi untuk mahasiswa</p>
          </div>
          <Link to="/search" className="text-indigo-600 font-medium hover:underline">Lihat semua</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {RECOMMENDED_KOS.map((kos) => (
            <Link to={`/kos/${kos.id}`} key={kos.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-100">
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img 
                  src={kos.image} 
                  alt="Kamar Kos" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-slate-900">
                  Tersedia
                </div>
                <div className="absolute top-3 right-3 bg-indigo-600 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" /> {kos.rating.toFixed(1)}
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center gap-1 text-slate-500 text-xs mb-2">
                  <MapPin className="h-3 w-3" /> Balunijuk, {kos.distance}
                </div>
                <h3 className="font-bold text-slate-900 mb-1 line-clamp-1">{kos.name}</h3>
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-3">
                  <span className="flex items-center gap-1"><Wifi className="h-3 w-3"/> WiFi</span>
                  <span className="flex items-center gap-1"><Zap className="h-3 w-3"/> AC</span>
                </div>
                <div className="flex items-end justify-between mt-auto pt-4">
                  <div>
                    <span className="text-lg font-bold text-indigo-600">Rp {kos.price}</span>
                    <span className="text-xs text-slate-500">/bulan</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Advertisements Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Promo & Layanan Mahasiswa</h2>
              <p className="text-slate-500 mt-1">Diskon khusus dan penawaran menarik di sekitar kampus</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Ad 1 */}
            <a href="#" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-200 group block">
              <div className="h-40 overflow-hidden relative">
                <img src="https://hips.hearstapps.com/hmg-prod/images/washing-cycle-preparation-at-home-royalty-free-image-1736274935.pjpeg?crop=1xw:0.84415xh;center,top&resize=1200:*/600/400" alt="Laundry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                  Diskon 20%
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-slate-900 mb-1">Laundry Kilat Bersih</h4>
                <p className="text-sm text-slate-500 line-clamp-2">Khusus mahasiswa! Cuci setrika selesai 24 jam, gratis antar jemput area kos.</p>
              </div>
            </a>
            
            {/* Ad 2 */}
            <a href="#" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-200 group block">
              <div className="h-40 overflow-hidden relative">
                <img src="https://tse4.mm.bing.net/th/id/OIP.M6J5Q-lUA_Ij_mmTNUW58AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3/600/400" alt="Sewa Motor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
                <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                  Harga Spesial
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-slate-900 mb-1">Sewa Motor Bulanan</h4>
                <p className="text-sm text-slate-500 line-clamp-2">Mulai dari Rp 500rb/bulan. Unit terawat, gratis servis rutin dan helm.</p>
              </div>
            </a>

            {/* Ad 3 */}
            <a href="#" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-200 group block">
              <div className="h-40 overflow-hidden relative">
                <img src="https://tse1.mm.bing.net/th/id/OIP.nna39nLBH-Gl7RJSTD73IAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3/600/400" alt="Kafe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
                <div className="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                  Beli 1 Gratis 1
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-slate-900 mb-1">Kopi Senja Kampus</h4>
                <p className="text-sm text-slate-500 line-clamp-2">Promo happy hour jam 14:00 - 17:00. Tempat nyaman untuk nugas, WiFi kencang.</p>
              </div>
            </a>

            {/* Ad 4 */}
            <a href="#" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-200 group block">
              <div className="h-40 overflow-hidden relative">
                <img src="https://th.bing.com/th/id/OIP.cl2oLBaTgOqiWl5zuREkTQHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3/600/400" alt="Fotokopi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
                <div className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                  Cashback 10%
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-slate-900 mb-1">Print & Jilid Skripsi</h4>
                <p className="text-sm text-slate-500 line-clamp-2">Pusat fotokopi dan print warna termurah. Buka 24 jam khusus musim ujian.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Cara Kerja Kos id</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Pengalaman mulus bagi mahasiswa yang mencari tempat tinggal dan pemilik yang mengelola properti mereka.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-indigo-600 mb-6 flex items-center gap-2">
              <User className="h-6 w-6" /> Untuk Mahasiswa
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-slate-900">Cari & Filter</h4>
                  <p className="text-sm text-slate-500 mt-1">Temukan kos berdasarkan harga, jarak ke kampus, dan fasilitas.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-slate-900">Pesan & Bayar</h4>
                  <p className="text-sm text-slate-500 mt-1">Hubungi pemilik langsung dan pantau pembayaran bulanan Anda.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-slate-900">Bangun Reputasi</h4>
                  <p className="text-sm text-slate-500 mt-1">Jaga profil penyewa yang baik untuk memudahkan penyewaan properti di masa depan.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl shadow-sm text-white">
            <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
              <ShieldCheck className="h-6 w-6" /> Untuk Pemilik
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-900/50 text-emerald-400 flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-white">Kelola Kamar</h4>
                  <p className="text-sm text-slate-400 mt-1">Perbarui ketersediaan, harga, dan foto dengan mudah dari dasbor Anda.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-900/50 text-emerald-400 flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-white">Pantau Pembayaran</h4>
                  <p className="text-sm text-slate-400 mt-1">Pantau siapa yang sudah membayar, kirim pengingat, dan lacak analitik keuangan.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-900/50 text-emerald-400 flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-white">Daftar Hitam Penyewa</h4>
                  <p className="text-sm text-slate-400 mt-1">Periksa calon penyewa melalui database penyewa bermasalah kami.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
