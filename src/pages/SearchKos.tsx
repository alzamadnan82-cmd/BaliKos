import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Filter, Star, Wifi, Zap, Car } from 'lucide-react';

export default function SearchKos() {
  const [priceRange, setPriceRange] = useState(1500000);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-24">
          <div className="flex items-center gap-2 font-bold text-lg mb-6 pb-4 border-b border-slate-100">
            <Filter className="h-5 w-5" /> Filter
          </div>

          <div className="space-y-6">
            {/* Price Range */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Harga Maksimal (Bulanan)</label>
              <input 
                type="range" 
                min="500000" 
                max="5000000" 
                step="100000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
              <div className="text-sm text-slate-600 mt-2 font-medium">
                Hingga Rp {(priceRange / 1000000).toFixed(1)}Jt
              </div>
            </div>

            {/* Distance */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Jarak ke Kampus</label>
              <select className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none">
                <option>Jarak berapapun</option>
                <option>&lt; 1 km</option>
                <option>&lt; 3 km</option>
                <option>&lt; 5 km</option>
              </select>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Tipe Kos</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="radio" name="gender" className="accent-indigo-600" defaultChecked /> Campur
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="radio" name="gender" className="accent-indigo-600" /> Khusus Putra
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="radio" name="gender" className="accent-indigo-600" /> Khusus Putri
                </label>
              </div>
            </div>

            {/* Facilities */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Fasilitas</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" className="accent-indigo-600 rounded" /> AC
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" className="accent-indigo-600 rounded" /> WiFi
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" className="accent-indigo-600 rounded" /> Kamar Mandi Dalam
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" className="accent-indigo-600 rounded" /> Parkir
                </label>
              </div>
            </div>

            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Terapkan Filter
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Kos dekat Universitas Bangka Belitung</h1>
            <p className="text-slate-500 text-sm mt-1">Menampilkan 24 kamar tersedia</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">Urutkan:</span>
            <select className="p-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none bg-white">
              <option>Rekomendasi</option>
              <option>Harga: Terendah ke Tertinggi</option>
              <option>Harga: Tertinggi ke Terendah</option>
              <option>Jarak: Terdekat</option>
            </select>
          </div>
        </div>

        {/* Search Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Link to={`/kos/${i}`} key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col">
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img 
                  src={`https://picsum.photos/seed/kos${i+10}/600/400`} 
                  alt="Kamar Kos" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-slate-900">
                  {i % 3 === 0 ? 'Sisa 1 Kamar' : 'Tersedia'}
                </div>
                <div className="absolute top-3 right-3 bg-indigo-600 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" /> {(4.5 + (i%5)*0.1).toFixed(1)}
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center gap-1 text-slate-500 text-xs mb-2">
                  <MapPin className="h-3 w-3" /> Balunijuk, {i * 2} menit ke kampus
                </div>
                <h3 className="font-bold text-slate-900 mb-1 line-clamp-1">Kos Eksklusif Bangka {i}</h3>
                <p className="text-xs text-slate-500 mb-3 line-clamp-2">Kos nyaman dengan fasilitas modern, cocok untuk mahasiswa yang butuh tempat tenang untuk belajar.</p>
                
                <div className="flex items-center gap-3 text-slate-500 text-xs mb-4 mt-auto">
                  <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded"><Wifi className="h-3 w-3"/> WiFi</span>
                  <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded"><Zap className="h-3 w-3"/> AC</span>
                  <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded"><Car className="h-3 w-3"/> Parkir</span>
                </div>
                
                <div className="flex items-end justify-between pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-lg font-bold text-indigo-600">Rp {(1.2 + i*0.1).toFixed(1)}Jt</span>
                    <span className="text-xs text-slate-500">/bulan</span>
                  </div>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Campur</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
