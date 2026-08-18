import { Sidebar } from '@/components/layout/sidebar';
import { Navbar } from '@/components/layout/navbar';
import { AuthProvider } from '@/components/auth-provider';
import { getServerSession } from '@/lib/auth-server';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  const authSession = session ? { username: session.username, role: session.role } : null;

  return (
    <AuthProvider session={authSession}>
      <div className="min-h-screen bg-background">
        <Sidebar />
        <div className="lg:pl-60 transition-all duration-300">
          <Navbar />
          <main className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto">
            {children}
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}
