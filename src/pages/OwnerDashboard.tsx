import { useState } from 'react';
import { LayoutDashboard, Home, Users, CreditCard, ShieldAlert, BarChart3, Plus, Search, AlertTriangle } from 'lucide-react';

export default function OwnerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="bg-slate-900 rounded-2xl shadow-sm overflow-hidden sticky top-24 text-slate-300">
          <div className="p-6 border-b border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
              W
            </div>
            <div>
              <h2 className="font-bold text-white">Bapak Wayan</h2>
              <p className="text-xs text-slate-400">Pemilik Properti</p>
            </div>
          </div>
          <nav className="p-4 space-y-1">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'overview' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
            >
              <LayoutDashboard className="h-4 w-4" /> Dasbor
            </button>
            <button 
              onClick={() => setActiveTab('rooms')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'rooms' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
            >
              <Home className="h-4 w-4" /> Manajemen Kamar
            </button>
            <button 
              onClick={() => setActiveTab('tenants')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'tenants' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
            >
              <Users className="h-4 w-4" /> Database Penyewa
            </button>
            <button 
              onClick={() => setActiveTab('payments')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'payments' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
            >
              <CreditCard className="h-4 w-4" /> Pelacakan Pembayaran
            </button>
            <button 
              onClick={() => setActiveTab('blacklist')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'blacklist' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
            >
              <ShieldAlert className="h-4 w-4" /> Sistem Daftar Hitam
            </button>
            <button 
              onClick={() => setActiveTab('analytics')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'analytics' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
            >
              <BarChart3 className="h-4 w-4" /> Analitik Properti
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-slate-900">Dasbor Pemilik</h1>
              <button 
                onClick={() => alert("Membuka form penambahan kamar...")}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Plus className="h-4 w-4" /> Tambah Kamar Baru
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 text-slate-500 mb-2">
                  <Home className="h-5 w-5 text-indigo-600" /> Total Kamar
                </div>
                <div className="text-3xl font-bold text-slate-900">24</div>
                <div className="text-sm text-emerald-600 mt-2">22 Terisi - 2 Kosong</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 text-slate-500 mb-2">
                  <CreditCard className="h-5 w-5 text-emerald-600" /> Pendapatan Bulanan
                </div>
                <div className="text-3xl font-bold text-slate-900">Rp 33Jt</div>
                <div className="text-sm text-emerald-600 mt-2">Perkiraan bulan ini</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 text-slate-500 mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" /> Sewa Belum Dibayar
                </div>
                <div className="text-3xl font-bold text-slate-900">3</div>
                <div className="text-sm text-red-600 mt-2">Penyewa menunggak</div>
              </div>
            </div>

            {/* Quick Actions & Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Payment Alerts */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Peringatan Pembayaran</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Kamar 102 - Andi</p>
                      <p className="text-xs text-red-600">Menunggak 5 hari (Rp 1.5Jt)</p>
                    </div>
                    <button onClick={() => alert("Mengirim pesan pengingat tagihan ke Andi...")} className="text-xs bg-white border border-slate-300 px-3 py-1.5 rounded hover:bg-slate-50 font-medium">Ingatkan</button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Kamar 205 - Siti</p>
                      <p className="text-xs text-red-600">Menunggak 2 hari (Rp 1.5Jt)</p>
                    </div>
                    <button onClick={() => alert("Mengirim pesan pengingat tagihan ke Siti...")} className="text-xs bg-white border border-slate-300 px-3 py-1.5 rounded hover:bg-slate-50 font-medium">Ingatkan</button>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Aktivitas Terbaru</h2>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-emerald-500"></div>
                    <div>
                      <p className="text-sm text-slate-900">Pembayaran diterima dari <span className="font-bold">Kamar 104 (Budi)</span></p>
                      <p className="text-xs text-slate-500">2 jam yang lalu</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-indigo-500"></div>
                    <div>
                      <p className="text-sm text-slate-900">Pertanyaan baru untuk <span className="font-bold">Kamar 105</span></p>
                      <p className="text-xs text-slate-500">5 jam yang lalu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'blacklist' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-slate-900">Sistem Daftar Hitam Penyewa</h1>
              <button 
                onClick={() => alert("Membuka form laporan penyewa masuk daftar hitam...")}
                className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <ShieldAlert className="h-4 w-4" /> Laporkan Penyewa
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-6">
              <p className="text-sm text-slate-600 mb-4">
                Cari di database bersama untuk memeriksa apakah calon penyewa memiliki riwayat pelanggaran berat (tunggakan sewa, kerusakan properti, dll.) yang dilaporkan oleh pemilik kos lain.
              </p>
              <div className="flex gap-2">
                <div className="flex-grow flex items-center px-4 border border-slate-300 rounded-lg bg-slate-50">
                  <Search className="h-5 w-5 text-slate-400 mr-2" />
                  <input 
                    type="text" 
                    placeholder="Cari berdasarkan Nama, KTP, atau Nomor Telepon..." 
                    className="w-full py-2 text-slate-900 focus:outline-none bg-transparent text-sm"
                  />
                </div>
                <button 
                  onClick={() => alert("Sedang mencari di database...")}
                  className="bg-slate-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                  Periksa Database
                </button>
              </div>
            </div>

            <h2 className="text-lg font-bold text-slate-900 mb-4">Baru Dilaporkan di Area Anda</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-red-200 flex gap-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">J*** D***</h3>
                  <p className="text-xs text-slate-500 mb-2">Dilaporkan: Jan 2026</p>
                  <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-bold">Tunggakan Sewa (3 Bulan)</span>
                  <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-bold ml-2">Kabur dari Properti</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-red-200 flex gap-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">A*** S***</h3>
                  <p className="text-xs text-slate-500 mb-2">Dilaporkan: Nov 2025</p>
                  <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-bold">Kerusakan Properti Berat</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rooms Tab */}
        {activeTab === 'rooms' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-slate-900">Manajemen Kamar</h1>
              <button 
                onClick={() => alert("Membuka form penambahan kamar...")}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Plus className="h-4 w-4" /> Tambah Kamar Baru
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: '101', type: 'Standard', price: '1.200.000', status: 'occupied', tenant: 'Budi Santoso' },
                { id: '102', type: 'Premium', price: '1.500.000', status: 'occupied', tenant: 'Andi Wijaya' },
                { id: '103', type: 'Standard', price: '1.200.000', status: 'available', tenant: null },
                { id: '104', type: 'Premium', price: '1.500.000', status: 'maintenance', tenant: null },
                { id: '105', type: 'Standard', price: '1.200.000', status: 'occupied', tenant: 'Siti Aminah' },
                { id: '106', type: 'Premium', price: '1.500.000', status: 'available', tenant: null },
              ].map(room => (
                <div key={room.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">Kamar {room.id}</h3>
                      <p className="text-xs text-slate-500">{room.type} • Rp {room.price}/bln</p>
                    </div>
                    {room.status === 'occupied' && <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold">Terisi</span>}
                    {room.status === 'available' && <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">Kosong</span>}
                    {room.status === 'maintenance' && <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">Perbaikan</span>}
                  </div>
                  
                  {room.status === 'occupied' ? (
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mb-4 mt-auto">
                      <p className="text-xs text-slate-500 mb-1">Penyewa Saat Ini</p>
                      <p className="font-medium text-slate-900 text-sm">{room.tenant}</p>
                    </div>
                  ) : (
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mb-4 text-center mt-auto">
                      <p className="text-sm text-slate-500">Kamar tersedia untuk disewakan</p>
                    </div>
                  )}
                  
                  <div className="flex gap-2 mt-auto pt-4 border-t border-slate-100">
                    <button className="flex-1 bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50">Edit</button>
                    <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">Detail</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tenants Tab */}
        {activeTab === 'tenants' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-slate-900">Database Penyewa</h1>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <div className="flex items-center px-4 border border-slate-300 rounded-lg bg-white w-64">
                  <Search className="h-4 w-4 text-slate-400 mr-2" />
                  <input type="text" placeholder="Cari penyewa..." className="w-full py-2 text-slate-900 focus:outline-none bg-transparent text-sm" />
                </div>
              </div>
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="p-4 font-medium">Nama Penyewa</th>
                    <th className="p-4 font-medium">Kamar</th>
                    <th className="p-4 font-medium">Universitas</th>
                    <th className="p-4 font-medium">Kontak</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Budi Santoso</td>
                    <td className="p-4">101</td>
                    <td className="p-4 text-slate-500">UBB</td>
                    <td className="p-4 text-slate-500">081234567890</td>
                    <td className="p-4"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold">Aktif</span></td>
                    <td className="p-4"><button className="text-indigo-600 hover:underline font-medium">Detail</button></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Andi Wijaya</td>
                    <td className="p-4">102</td>
                    <td className="p-4 text-slate-500">Polsri Bangka</td>
                    <td className="p-4 text-slate-500">089876543210</td>
                    <td className="p-4"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold">Aktif</span></td>
                    <td className="p-4"><button className="text-indigo-600 hover:underline font-medium">Detail</button></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Putri Rahayu</td>
                    <td className="p-4">-</td>
                    <td className="p-4 text-slate-500">UBB</td>
                    <td className="p-4 text-slate-500">082211223344</td>
                    <td className="p-4"><span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold">Mantan</span></td>
                    <td className="p-4"><button className="text-indigo-600 hover:underline font-medium">Detail</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Payments Tab */}
        {activeTab === 'payments' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-slate-900">Pelacakan Pembayaran</h1>
              <div className="flex gap-2">
                <select className="border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none bg-white">
                  <option>Bulan Ini (April 2026)</option>
                  <option>Bulan Lalu (Maret 2026)</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <p className="text-sm text-slate-500 mb-1">Total Tertagih</p>
                <p className="font-bold text-2xl text-slate-900">Rp 33.000.000</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <p className="text-sm text-slate-500 mb-1">Sudah Dibayar</p>
                <p className="font-bold text-2xl text-emerald-600">Rp 28.500.000</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <p className="text-sm text-slate-500 mb-1">Belum Dibayar</p>
                <p className="font-bold text-2xl text-red-600">Rp 4.500.000</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="p-4 font-medium">Kamar</th>
                    <th className="p-4 font-medium">Penyewa</th>
                    <th className="p-4 font-medium">Tarif Sewa</th>
                    <th className="p-4 font-medium">Jatuh Tempo</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-bold text-slate-900">101</td>
                    <td className="p-4 text-slate-500">Budi Santoso</td>
                    <td className="p-4">Rp 1.200.000</td>
                    <td className="p-4 text-slate-500">05 Apr 2026</td>
                    <td className="p-4"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold">Lunas</span></td>
                    <td className="p-4 text-right"><button className="text-slate-400 hover:text-slate-900 underline text-xs">Cetak Tagihan</button></td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="p-4 font-bold text-slate-900">102</td>
                    <td className="p-4 text-slate-500">Andi Wijaya</td>
                    <td className="p-4">Rp 1.500.000</td>
                    <td className="p-4 text-slate-500">02 Apr 2026</td>
                    <td className="p-4"><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">Menunggak</span></td>
                    <td className="p-4 text-right flex justify-end gap-2">
                       <button className="bg-indigo-600 text-white px-3 py-1 rounded text-xs">Tandai Lunas</button>
                       <button className="bg-white border border-slate-300 text-slate-700 px-3 py-1 rounded text-xs">Ingatkan</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">105</td>
                    <td className="p-4 text-slate-500">Siti Aminah</td>
                    <td className="p-4">Rp 1.200.000</td>
                    <td className="p-4 text-slate-500">10 Apr 2026</td>
                    <td className="p-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">Menunggu</span></td>
                    <td className="p-4 text-right"><button className="bg-indigo-600 text-white px-3 py-1 rounded text-xs">Konfirmasi Bayar</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900">Analitik Properti</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-6">Pendapatan Tahunan</h2>
                <div className="flex items-end gap-2 h-48 mt-4 border-b-2 border-slate-100 pb-2">
                  {[40, 50, 70, 60, 90, 80, 100, 95, 85, 110, 105, 120].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                      <div className="w-full bg-indigo-100 rounded-t-sm group-hover:bg-indigo-500 transition-colors relative" style={{ height: `${h}%` }}>
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded pointer-events-none">Rp {(h/10).toFixed(1)}Jt</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mei</span><span>Jun</span><span>Jul</span><span>Ags</span><span>Sep</span><span>Okt</span><span>Nov</span><span>Des</span>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex-grow">
                  <h2 className="text-lg font-bold text-slate-900 mb-6">Tingkat Hunian Saat Ini</h2>
                  <div className="flex items-center justify-center h-32 mb-2">
                    <div className="w-32 h-32 rounded-full border-[16px] border-slate-100 relative">
                      <div className="absolute inset-[-16px] rounded-full border-[16px] border-emerald-500" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)' }}></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-slate-900">91%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-6 text-sm">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500"></div>Terisi (22)</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-100"></div>Kosong (2)</div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                   <h2 className="text-lg font-bold text-slate-900 mb-2">Performa Properti</h2>
                   <p className="text-sm text-slate-600">Pendapatan naik 12% dibandingkan dengan rata-rata triwulan sebelumnya. Permintaan tinggi terpusat pada unit premium.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
