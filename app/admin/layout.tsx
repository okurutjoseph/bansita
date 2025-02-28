import AdminHeader from './components/AdminHeader';
import AdminSidebar from './components/AdminSidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f0f0f1]">
      <AdminHeader />
      <AdminSidebar />
      <main className="pl-60 pt-8">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
} 