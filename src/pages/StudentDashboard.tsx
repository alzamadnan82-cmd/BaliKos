import { useState } from 'react';
import { Home, CreditCard, History, Settings, Bell, MessageSquare } from 'lucide-react';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
          <div className="p-6 border-b border-slate-100 flex items-center gap-4">
            <img src="https://picsum.photos/seed/student/100/100" alt="Mahasiswa" className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
            <div>
              <h2 className="font-bold text-slate-900">Budi Santoso</h2>
              <p className="text-xs text-slate-500">Universitas Bangka Belitung</p>
            </div>
          </div>
          <nav className="p-4 space-y-1">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'overview' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Home className="h-4 w-4" /> Kos Saya
            </button>
            <button 
              onClick={() => setActiveTab('payments')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'payments' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <CreditCard className="h-4 w-4" /> Pembayaran
            </button>
            <button 
              onClick={() => setActiveTab('messages')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'messages' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <MessageSquare className="h-4 w-4" /> Pesan
              <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">2</span>
            </button>
            <button 
              onClick={() => setActiveTab('history')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'history' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <History className="h-4 w-4" /> Tersimpan & Riwayat
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'settings' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Settings className="h-4 w-4" /> Pengaturan Profil
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900">Kos Saya Saat Ini</h1>
            
            {/* Current Kos Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 h-48 md:h-auto">
                  <img src="https://picsum.photos/seed/mykos/600/400" alt="Kos Saya" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-xl font-bold text-slate-900">Kos Eksklusif Bangka 1</h2>
                      <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold">Aktif</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-4">Kamar 104 - Balunijuk, Bangka</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <p className="text-xs text-slate-500 mb-1">Sewa Bulanan</p>
                        <p className="font-bold text-slate-900">Rp 1.500.000</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <p className="text-xs text-slate-500 mb-1">Jatuh Tempo Berikutnya</p>
                        <p className="font-bold text-red-600">5 April 2026</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                      Bayar Sewa
                    </button>
                    <button className="bg-white text-slate-700 border border-slate-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                      Hubungi Pemilik
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <h2 className="text-lg font-bold text-slate-900 mt-8 mb-4">Notifikasi Terbaru</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="divide-y divide-slate-100">
                <div className="p-4 flex gap-4 items-start hover:bg-slate-50 transition-colors">
                  <div className="bg-red-100 text-red-600 p-2 rounded-full"><Bell className="h-4 w-4" /></div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Pengingat Pembayaran Sewa</p>
                    <p className="text-xs text-slate-500 mt-1">Sewa Anda untuk bulan April jatuh tempo dalam 3 hari. Harap selesaikan pembayaran untuk menghindari denda keterlambatan.</p>
                    <p className="text-xs text-slate-400 mt-2">2 jam yang lalu</p>
                  </div>
                </div>
                <div className="p-4 flex gap-4 items-start hover:bg-slate-50 transition-colors">
                  <div className="bg-indigo-100 text-indigo-600 p-2 rounded-full"><MessageSquare className="h-4 w-4" /></div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Pesan baru dari Bapak Wayan</p>
                    <p className="text-xs text-slate-500 mt-1">"Halo Budi, untuk AC besok akan ada teknisi yang datang untuk service rutin ya."</p>
                    <p className="text-xs text-slate-400 mt-2">Kemarin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900">Pelacakan Pembayaran</h1>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Riwayat Pembayaran</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-500">
                    <tr>
                      <th className="p-4 font-medium rounded-tl-lg">Bulan</th>
                      <th className="p-4 font-medium">Jumlah</th>
                      <th className="p-4 font-medium">Tanggal Bayar</th>
                      <th className="p-4 font-medium">Status</th>
                      <th className="p-4 font-medium rounded-tr-lg">Kuitansi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-4 font-medium text-slate-900">April 2026</td>
                      <td className="p-4">Rp 1.500.000</td>
                      <td className="p-4 text-slate-500">-</td>
                      <td className="p-4"><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">Belum Lunas</span></td>
                      <td className="p-4"><button className="text-indigo-600 hover:underline">Bayar Sekarang</button></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-slate-900">Maret 2026</td>
                      <td className="p-4">Rp 1.500.000</td>
                      <td className="p-4 text-slate-500">2 Mar 2026</td>
                      <td className="p-4"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold">Lunas</span></td>
                      <td className="p-4"><button className="text-indigo-600 hover:underline">Lihat</button></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-slate-900">Februari 2026</td>
                      <td className="p-4">Rp 1.500.000</td>
                      <td className="p-4 text-slate-500">4 Feb 2026</td>
                      <td className="p-4"><span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold">Lunas</span></td>
                      <td className="p-4"><button className="text-indigo-600 hover:underline">Lihat</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs can be implemented similarly */}
        {['messages', 'history', 'settings'].includes(activeTab) && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center">
            <h2 className="text-xl font-bold text-slate-900 mb-2 capitalize">
              {activeTab === 'messages' ? 'Pesan' : activeTab === 'history' ? 'Riwayat' : 'Pengaturan'}
            </h2>
            <p className="text-slate-500">Bagian ini adalah bagian dari prototipe dan akan diimplementasikan sepenuhnya pada fase berikutnya.</p>
          </div>
        )}
      </main>
    </div>
  );
}
