"use client";
import { FiMenu, FiX, FiChevronLeft } from "react-icons/fi";
import { useUserStore } from "@/store/user";
import { useEffect } from "react";
import Link from "next/link";

// Menu items data
const menuItems = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Blogs", href: "/blog" },
  { id: 3, title: "Projects", href: "/projects" },
];

const MobileSidebar = () => {
  const { sidebarOpen, changeSidebarOpen } = useUserStore();

  useEffect(() => {
    const mainContent = document.getElementById("main-content");

    if (!mainContent) return;

    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
      mainContent.classList.add("active");
    } else {
      document.body.style.overflow = "auto";
      mainContent.classList.remove("active");
    }
  }, [sidebarOpen]);

  // Close sidebar
  const closeSidebar = () => {
    changeSidebarOpen(false);
  };

  return (
    <>
      {/* Background overlay - click to close (visible when sidebar is open) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar menu - right side */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              onClick={closeSidebar}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Close sidebar"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-200"
                    onClick={() => {
                      // Close sidebar on mobile when clicking a menu item
                      if (window.innerWidth < 768) {
                        closeSidebar();
                      }
                    }}
                  >
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;