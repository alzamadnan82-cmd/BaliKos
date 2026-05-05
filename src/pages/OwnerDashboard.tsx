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
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2">
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
                    <button className="text-xs bg-white border border-slate-300 px-3 py-1.5 rounded hover:bg-slate-50 font-medium">Ingatkan</button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Kamar 205 - Siti</p>
                      <p className="text-xs text-red-600">Menunggak 2 hari (Rp 1.5Jt)</p>
                    </div>
                    <button className="text-xs bg-white border border-slate-300 px-3 py-1.5 rounded hover:bg-slate-50 font-medium">Ingatkan</button>
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
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center gap-2">
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
                <button className="bg-slate-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
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

        {/* Other tabs placeholder */}
        {['rooms', 'tenants', 'payments', 'analytics'].includes(activeTab) && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center">
            <h2 className="text-xl font-bold text-slate-900 mb-2 capitalize">Manajemen {activeTab === 'rooms' ? 'Kamar' : activeTab === 'tenants' ? 'Penyewa' : activeTab === 'payments' ? 'Pembayaran' : 'Analitik'}</h2>
            <p className="text-slate-500">Bagian ini adalah bagian dari prototipe dan akan diimplementasikan sepenuhnya pada fase berikutnya.</p>
          </div>
        )}
      </main>
    </div>
  );
}
