import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Filter, Star, Wifi, Zap, Car } from 'lucide-react';

const MOCK_KOS = [
  { id: 1, name: "Kos Griya Putri", price: 1500000, distance: 1, gender: "campur", facilities: ["WiFi", "AC", "Parkir", "Kamar Mandi Dalam"], rating: 4.8, available: true, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80" },
  { id: 2, name: "Kos Bintang Dormitory", price: 800000, distance: 3, gender: "putra", facilities: ["WiFi", "Parkir"], rating: 4.2, available: true, image: "https://kostmurah.dipalembang.info/wp-content/uploads/2023/10/KOST-MAHASISWA-MURAH-DI-PALEMBANG-700x525.jpeg?w=600&q=80" },
  { id: 3, name: "Kos Pelangi Jaya", price: 1000000, distance: 2, gender: "putri", facilities: ["WiFi", "Kamar Mandi Dalam", "Parkir"], rating: 4.5, available: false, image: "https://www.erakini.id/images/post/16_9/bisnis-kos-kosan-570x300_1716542662.webp?w=600&q=80" },
  { id: 4, name: "Kos Galeyo", price: 2000000, distance: 0.5, gender: "campur", facilities: ["WiFi", "AC", "Parkir", "Kamar Mandi Dalam"], rating: 4.9, available: true, image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80" },
  { id: 5, name: "Kos Zam Zam", price: 600000, distance: 4, gender: "putra", facilities: ["Parkir"], rating: 3.8, available: true, image: "https://rbtv.disway.id/upload/9b212a48bcc7b0507406aa85a24f59ff.jpg?w=600&q=80" },
  { id: 6, name: "Kos Keriwil", price: 1200000, distance: 1.5, gender: "putri", facilities: ["WiFi", "AC"], rating: 4.4, available: true, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizF8DaHKHWDYChAxL86B0UXHgN1ridN2J9BBw3CiNTcjSJ75DJlo3syAUl5DpHbaZwuwcEf3JYosXPh3VVlyOKaZMQb-BIB-Pc1EMk8V6lOnYS6KUHPOnPEglnkScQub40mYM1DIlpqYDi/s640/desain-kamar-kost.jpg?w=600&q=80" },
];

export default function SearchKos() {
  const [priceRange, setPriceRange] = useState(2500000);
  const [distance, setDistance] = useState("all");
  const [gender, setGender] = useState("all");
  const [facilities, setFacilities] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("recommendation");
  
  // Temporary state for the sidebar before "Terapkan Filter" is clicked
  const [tempPrice, setTempPrice] = useState(priceRange);
  const [tempDistance, setTempDistance] = useState(distance);
  const [tempGender, setTempGender] = useState(gender);
  const [tempFacilities, setTempFacilities] = useState<string[]>( facilities );

  const handleFacilityChange = (facility: string) => {
    setTempFacilities(prev => 
      prev.includes(facility) 
        ? prev.filter(f => f !== facility) 
        : [...prev, facility]
    );
  };

  const applyFilters = () => {
    setPriceRange(tempPrice);
    setDistance(tempDistance);
    setGender(tempGender);
    setFacilities(tempFacilities);
  };

  const filteredKos = useMemo(() => {
    let result = MOCK_KOS.filter(kos => {
      if (kos.price > priceRange) return false;
      if (distance !== "all" && kos.distance > parseFloat(distance)) return false;
      if (gender !== "all" && kos.gender !== gender) return false;
      if (facilities.length > 0) {
        const hasAllFacilities = facilities.every(f => kos.facilities.includes(f));
        if (!hasAllFacilities) return false;
      }
      return true;
    });

    if (sortBy === "price_asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price_desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "nearest") {
      result.sort((a, b) => a.distance - b.distance);
    }

    return result;
  }, [priceRange, distance, gender, facilities, sortBy]);

  const formatPrice = (price: number) => {
    return `Rp ${(price / 1000000).toFixed(1)}Jt`;
  };

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
                value={tempPrice}
                onChange={(e) => setTempPrice(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
              <div className="text-sm text-slate-600 mt-2 font-medium">
                Hingga Rp {(tempPrice / 1000000).toFixed(1)}Jt
              </div>
            </div>

            {/* Distance */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Jarak ke Kampus</label>
              <select 
                className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                value={tempDistance}
                onChange={(e) => setTempDistance(e.target.value)}
              >
                <option value="all">Jarak berapapun</option>
                <option value="1">&lt; 1 km</option>
                <option value="3">&lt; 3 km</option>
                <option value="5">&lt; 5 km</option>
              </select>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Tipe Kos</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input type="radio" name="gender" className="accent-indigo-600" checked={tempGender === "all"} onChange={() => setTempGender("all")} /> Semua
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input type="radio" name="gender" className="accent-indigo-600" checked={tempGender === "campur"} onChange={() => setTempGender("campur")} /> Campur
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input type="radio" name="gender" className="accent-indigo-600" checked={tempGender === "putra"} onChange={() => setTempGender("putra")} /> Khusus Putra
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input type="radio" name="gender" className="accent-indigo-600" checked={tempGender === "putri"} onChange={() => setTempGender("putri")} /> Khusus Putri
                </label>
              </div>
            </div>

            {/* Facilities */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Fasilitas</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input type="checkbox" className="accent-indigo-600 rounded" checked={tempFacilities.includes("AC")} onChange={() => handleFacilityChange("AC")} /> AC
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input type="checkbox" className="accent-indigo-600 rounded" checked={tempFacilities.includes("WiFi")} onChange={() => handleFacilityChange("WiFi")} /> WiFi
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input type="checkbox" className="accent-indigo-600 rounded" checked={tempFacilities.includes("Kamar Mandi Dalam")} onChange={() => handleFacilityChange("Kamar Mandi Dalam")} /> Kamar Mandi Dalam
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input type="checkbox" className="accent-indigo-600 rounded" checked={tempFacilities.includes("Parkir")} onChange={() => handleFacilityChange("Parkir")} /> Parkir
                </label>
              </div>
            </div>

            <button 
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              onClick={applyFilters}
            >
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
            <p className="text-slate-500 text-sm mt-1">Menampilkan {filteredKos.length} kamar tersedia</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">Urutkan:</span>
            <select 
              className="p-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="recommendation">Rekomendasi</option>
              <option value="price_asc">Harga: Terendah ke Tertinggi</option>
              <option value="price_desc">Harga: Tertinggi ke Terendah</option>
              <option value="nearest">Jarak: Terdekat</option>
            </select>
          </div>
        </div>

        {/* Search Results Grid */}
        {filteredKos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredKos.map((kos) => (
              <Link to={`/kos/${kos.id}`} key={kos.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col">
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img 
                    src={kos.image} 
                    alt="Kamar Kos" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold ${kos.available ? 'text-slate-900' : 'text-red-500'}`}>
                    {kos.available ? 'Tersedia' : 'Penuh'}
                  </div>
                  <div className="absolute top-3 right-3 bg-indigo-600 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" /> {kos.rating.toFixed(1)}
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-1 text-slate-500 text-xs mb-2">
                    <MapPin className="h-3 w-3" /> Balunijuk, {kos.distance} km ke kampus
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1 line-clamp-1">{kos.name}</h3>
                  <p className="text-xs text-slate-500 mb-3 line-clamp-2">Kos nyaman dengan fasilitas modern, cocok untuk mahasiswa yang butuh tempat tenang untuk belajar.</p>
                  
                  <div className="flex flex-wrap items-center gap-2 text-slate-500 text-xs mb-4 mt-auto">
                    {kos.facilities.includes('WiFi') && <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded"><Wifi className="h-3 w-3"/> WiFi</span>}
                    {kos.facilities.includes('AC') && <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded"><Zap className="h-3 w-3"/> AC</span>}
                    {kos.facilities.includes('Parkir') && <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded"><Car className="h-3 w-3"/> Parkir</span>}
                  </div>
                  
                  <div className="flex items-end justify-between pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-lg font-bold text-indigo-600">{formatPrice(kos.price)}</span>
                      <span className="text-xs text-slate-500">/bulan</span>
                    </div>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{kos.gender}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <Filter className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Tidak ada kos yang sesuai</h3>
            <p className="text-slate-500 max-w-sm mx-auto">Coba sesuaikan filter Anda (harga, fasilitas, atau jarak) untuk menemukan lebih banyak pilihan.</p>
            <button 
              className="mt-6 px-4 py-2 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
              onClick={() => {
                setTempPrice(2500000);
                setTempDistance("all");
                setTempGender("all");
                setTempFacilities([]);
                setPriceRange(2500000);
                setDistance("all");
                setGender("all");
                setFacilities([]);
              }}
            >
              Hapus Semua Filter
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
