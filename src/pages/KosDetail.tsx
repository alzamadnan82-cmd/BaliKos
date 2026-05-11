import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Wifi, Zap, Car, Wind, Shield, CheckCircle, MessageCircle, Calendar } from 'lucide-react';

export default function KosDetail() {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  
  const images = [
    `https://picsum.photos/seed/kos${id}_1/800/600`,
    `https://picsum.photos/seed/kos${id}_2/800/600`,
    `https://picsum.photos/seed/kos${id}_3/800/600`,
    `https://picsum.photos/seed/kos${id}_4/800/600`,
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
          <span>Beranda</span> <span className="text-slate-300">/</span> <span>Balunijuk</span> <span className="text-slate-300">/</span> <span className="text-slate-900 font-medium">Kos Eksklusif Bangka {id}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Kos Eksklusif Bangka {id}</h1>
            <div className="flex items-center gap-4 mt-2 text-sm">
              <span className="flex items-center gap-1 text-slate-600"><MapPin className="h-4 w-4" /> Balunijuk, Bangka (5 menit ke UBB)</span>
              <span className="flex items-center gap-1 text-indigo-600 font-medium"><Star className="h-4 w-4 text-yellow-400 fill-current" /> 4.8 (24 ulasan)</span>
              <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">Kos Campur</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-indigo-600">Rp 1.5Jt<span className="text-sm text-slate-500 font-normal">/bulan</span></div>
            <p className="text-sm text-emerald-600 font-medium mt-1">Sisa 2 Kamar</p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 h-[300px] md:h-[400px]">
        <div className="md:col-span-2 h-full w-full relative rounded-2xl overflow-hidden min-h-0">
          <img src={images[activeImage]} alt="Kamar Utama" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="hidden md:grid grid-rows-3 gap-4 h-full">
          {images.slice(1).map((img, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden cursor-pointer opacity-80 hover:opacity-100 transition-opacity h-full w-full min-h-0" onClick={() => setActiveImage(idx + 1)}>
              <img src={img} alt={`Thumbnail ${idx}`} className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-10">
          {/* Description */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Tentang Kos Ini</h2>
            <p className="text-slate-600 leading-relaxed">
              Selamat datang di Kos Eksklusif Bangka, kos premium yang dirancang khusus untuk mahasiswa yang membutuhkan lingkungan yang tenang, nyaman, dan aman untuk fokus belajar. Terletak hanya 5 menit berjalan kaki dari kampus Universitas Bangka Belitung.
              <br/><br/>
              Setiap kamar dilengkapi dengan kasur spring bed, meja belajar, lemari pakaian, dan kamar mandi dalam. Bangunan ini dilengkapi keamanan CCTV 24/7, dapur bersama, dan area parkir luas untuk motor dan mobil.
            </p>
          </section>

          {/* Facilities */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Fasilitas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-slate-700"><Wifi className="h-5 w-5 text-indigo-500" /> WiFi Kecepatan Tinggi</div>
              <div className="flex items-center gap-3 text-slate-700"><Zap className="h-5 w-5 text-indigo-500" /> AC</div>
              <div className="flex items-center gap-3 text-slate-700"><Wind className="h-5 w-5 text-indigo-500" /> Kamar Mandi Dalam</div>
              <div className="flex items-center gap-3 text-slate-700"><Car className="h-5 w-5 text-indigo-500" /> Parkir Aman</div>
              <div className="flex items-center gap-3 text-slate-700"><Shield className="h-5 w-5 text-indigo-500" /> CCTV 24/7</div>
              <div className="flex items-center gap-3 text-slate-700"><CheckCircle className="h-5 w-5 text-indigo-500" /> Perabotan Lengkap</div>
            </div>
          </section>

          {/* Rules */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Peraturan Kos</h2>
            <ul className="space-y-2 text-slate-600 list-disc list-inside">
              <li>Dilarang menyetel musik keras setelah jam 10 malam</li>
              <li>Tamu diizinkan hingga jam 11 malam</li>
              <li>Dilarang merokok di dalam kamar</li>
              <li>Tidak diizinkan membawa hewan peliharaan</li>
              <li>Sewa bulanan harus dibayar sebelum tanggal 5 setiap bulannya</li>
            </ul>
          </section>

          {/* Map Placeholder */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Lokasi</h2>
            <div className="w-full h-64 bg-slate-200 rounded-2xl flex items-center justify-center border border-slate-300">
              <div className="text-center text-slate-500">
                <MapPin className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>Integrasi Google Maps</p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Action */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 sticky top-24">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Tertarik menyewa?</h3>
            
            <div className="flex items-center gap-4 mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <img src="https://picsum.photos/seed/owner/100/100" alt="Pemilik" className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <p className="font-bold text-slate-900 text-sm">Bapak Wayan</p>
                <p className="text-xs text-slate-500">Pemilik Kos - Terverifikasi</p>
              </div>
            </div>

            <div className="space-y-4">
              <button 
                onClick={() => alert("Membuka chat WhatsApp dengan pemilik...")}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" /> Chat Pemilik
              </button>
              <button 
                onClick={() => alert("Membuka form pengajuan kunjungan...")}
                className="w-full bg-white text-indigo-600 border border-indigo-200 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="h-5 w-5" /> Ajukan Kunjungan
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-500">Sewa Bulanan</span>
                <span className="font-medium text-slate-900">Rp 1.500.000</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-500">Deposit (Dapat Dikembalikan)</span>
                <span className="font-medium text-slate-900">Rp 500.000</span>
              </div>
              <div className="flex justify-between text-sm mb-4">
                <span className="text-slate-500">Listrik</span>
                <span className="font-medium text-slate-900">Token</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
