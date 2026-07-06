import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="py-12 text-center text-sm" style={{ backgroundColor: 'var(--color-brand-primary)', color: 'var(--text-inverse)' }}>
        <p>&copy; {new Date().getFullYear()} RBTECH. All rights reserved.</p>
      </footer>
    </div>
  );
}
