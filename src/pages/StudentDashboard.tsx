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
                    <button 
                      onClick={() => alert("Mengalihkan ke halaman pembayaran...")}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                    >
                      Bayar Sewa
                    </button>
                    <button 
                      onClick={() => alert("Membuka chat WhatsApp dengan pemilik...")}
                      className="bg-white text-slate-700 border border-slate-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
                    >
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

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="space-y-6 h-[80vh] flex flex-col">
            <h1 className="text-2xl font-bold text-slate-900">Pesan</h1>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex-grow flex">
              {/* Chat List */}
              <div className="w-1/3 border-r border-slate-200 flex flex-col">
                <div className="p-4 border-b border-slate-100 font-bold text-sm text-slate-900">Obrolan Aktif</div>
                <div className="overflow-y-auto flex-grow">
                  <div className="p-4 border-b border-slate-100 bg-slate-50 cursor-pointer flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">W</div>
                    <div>
                      <p className="font-bold text-sm text-slate-900">Bapak Wayan</p>
                      <p className="text-xs text-slate-500 truncate w-32">Iya, besok teknisi AC akan datang...</p>
                    </div>
                  </div>
                  <div className="p-4 border-b border-slate-100 cursor-pointer flex gap-3 items-center hover:bg-slate-50">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">S</div>
                    <div>
                      <p className="font-bold text-sm text-slate-900">Ibu Sri (Admin)</p>
                      <p className="text-xs text-slate-500 truncate w-32">Tolong lengkapi data diri ya mas...</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Chat View */}
              <div className="w-2/3 flex flex-col">
                <div className="p-4 border-b border-slate-100 font-bold text-slate-900 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">W</div>
                  Bapak Wayan (Pemilik Kos)
                </div>
                <div className="flex-grow p-4 overflow-y-auto bg-slate-50 flex flex-col gap-4">
                  <div className="self-start bg-white p-3 rounded-lg rounded-tl-none border border-slate-200 text-sm max-w-[80%] shadow-sm">
                    Halo Budi, untuk AC kamar 104 besok akan ada teknisi yang datang untuk service rutin ya sekitar jam 10 pagi.
                    <span className="block text-[10px] text-slate-400 mt-1">Kemarin 14:20</span>
                  </div>
                  <div className="self-end bg-indigo-600 text-white p-3 rounded-lg rounded-tr-none text-sm max-w-[80%] shadow-sm">
                    Baik Pak Wayan. Besok saya ada kelas pagi, kuncinya saya titip di bawah atau gimana ya Pak?
                    <span className="block text-[10px] text-indigo-200 mt-1 text-right">Kemarin 15:00</span>
                  </div>
                  <div className="self-start bg-white p-3 rounded-lg rounded-tl-none border border-slate-200 text-sm max-w-[80%] shadow-sm">
                    Titip di satpam saja mas kuncinya, nanti saya temani teknisinya.
                    <span className="block text-[10px] text-slate-400 mt-1">Hari ini 08:15</span>
                  </div>
                </div>
                <div className="p-4 border-t border-slate-200 bg-white">
                  <div className="flex gap-2">
                    <input type="text" placeholder="Ketik pesan..." className="flex-grow border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">Kirim</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* History & Saved Tab */}
        {activeTab === 'history' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900">Tersimpan & Riwayat</h1>
            
            <h2 className="text-lg font-bold text-slate-900 mt-8 mb-4">Kos Tersimpan (Wishlist)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[2, 4].map(id => (
                <div key={id} className="bg-white rounded-xl shadow-sm border border-slate-200 flex overflow-hidden">
                  <img src={`https://picsum.photos/seed/kos${id + 10}/200/200`} alt="Kos" className="w-1/3 object-cover" />
                  <div className="p-4 w-2/3 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 line-clamp-1">Kos Eksklusif Bangka {id}</h3>
                      <p className="text-xs text-slate-500 mb-2">Balunijuk, dekat kampus UBB</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-indigo-600 font-bold text-sm">Rp {(1.2 + id * 0.1).toFixed(1)}Jt/bln</span>
                      <button className="text-xs font-medium text-red-500 hover:underline">Hapus</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-lg font-bold text-slate-900 mt-8 mb-4">Riwayat Sewa Sebelumnya</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="p-4 font-medium rounded-tl-lg">Nama Kos</th>
                    <th className="p-4 font-medium">Periode Sewa</th>
                    <th className="p-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-medium text-slate-900">Kos Mawar Putra</td>
                    <td className="p-4 text-slate-500">Jan 2025 - Des 2025</td>
                    <td className="p-4"><span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold">Selesai</span></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">Kos Melati Indah</td>
                    <td className="p-4 text-slate-500">Agustus 2024 - Des 2024</td>
                    <td className="p-4"><span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold">Selesai</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900">Pengaturan Profil</h1>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
              <form className="max-w-2xl space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Profil berhasil diperbarui!'); }}>
                {/* Photo Update */}
                <div className="flex items-center gap-6 pb-6 border-b border-slate-100">
                  <img src="https://picsum.photos/seed/student/100/100" alt="Avatar" className="w-20 h-20 rounded-full object-cover shadow-sm" />
                  <div>
                    <button type="button" className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors mb-1">Ubah Foto</button>
                    <p className="text-xs text-slate-500">JPG, GIF, atau PNG. Maksimal 2MB.</p>
                  </div>
                </div>
                
                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                    <input type="text" defaultValue="Budi Santoso" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input type="email" defaultValue="budi.santoso@mhs.ubb.ac.id" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50" readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nomor Telepon</label>
                    <input type="text" defaultValue="081234567890" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Universitas</label>
                    <input type="text" defaultValue="Universitas Bangka Belitung" className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex justify-end gap-3">
                  <button type="button" className="px-6 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50">Batal</button>
                  <button type="submit" className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700">Simpan Perubahan</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
