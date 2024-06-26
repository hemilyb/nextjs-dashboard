import SideNav from "./sidenav";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-secondary">
      <div className="w-full flex-none md:w-64 bg-secondary">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-secondary">{children}</div>
    </div>
  );
}
