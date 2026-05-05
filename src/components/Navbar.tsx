import { Link } from 'react-router-dom';
import { Home, Search, User, LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-6 w-6 text-indigo-600" />
              <span className="font-bold text-xl tracking-tight text-slate-900">BaliKos</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/search" className="text-slate-600 hover:text-indigo-600 font-medium flex items-center gap-1">
              <Search className="h-4 w-4" /> Cari Kos
            </Link>
            <div className="h-6 w-px bg-slate-200"></div>
            <Link to="/student-dashboard" className="text-slate-600 hover:text-indigo-600 font-medium flex items-center gap-1">
              <User className="h-4 w-4" /> Mahasiswa
            </Link>
            <Link to="/owner-dashboard" className="text-slate-600 hover:text-indigo-600 font-medium flex items-center gap-1">
              <LogIn className="h-4 w-4" /> Pemilik
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
