import { useSidebar } from "../../context/SidebarContext";

const Backdrop: React.FC = () => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();

  if (!isMobileOpen) return null;

  return (
    <div
      role="none"
      tabIndex={-1}
      className="fixed inset-0 z-40 bg-gray-900/20 backdrop-blur-md lg:hidden"
      onClick={toggleMobileSidebar}
    />
  );
};

export default Backdrop;
