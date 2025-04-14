import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Backdrop from "../components/global/Backdrop";
import Header from "../components/header/Header";

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <Sidebar />
        <Backdrop />
      </div>
      <div
        className={`flex-1 transition-all max-w-screen duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:pl-[290px]" : "lg:pl-[90px]"
        } ${isMobileOpen ? "pl-0" : ""}`}
      >
        <Header />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AdminLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AdminLayout;
