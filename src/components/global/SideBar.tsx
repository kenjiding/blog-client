"use client";
import { FiMenu, FiX, FiHome, FiBook, FiFolder } from "react-icons/fi";
import { useUserStore } from "@/store/user";
import { useEffect } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";

// Menu items data with icons
const menuItems = [
  { id: 1, title: "Home", href: "/", icon: <FiHome size={20} /> },
  { id: 2, title: "Blogs", href: "/blogs", icon: <FiBook size={20} /> },
  { id: 3, title: "Projects", href: "/projects", icon: <FiFolder size={20} /> },
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
          className="fixed inset-0 bg-gradient-to-br from-black/70 to-blue-900/50 backdrop-blur-[10] z-40 transition-opacity duration-500"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar menu - right side */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900/30 backdrop-blur-lg border-l border-gray-500/20 text-white z-50 transform transition-transform duration-500 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full relative overflow-hidden">
          {/* Gradient overlay for visual depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900/80 pointer-events-none" />

          {/* Header with close button */}
          <div className="flex items-center justify-between p-6 border-b border-gray-600/20 relative z-10">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Menu
            </h2>
            <button
              onClick={closeSidebar}
              className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/70 hover:rotate-90 active:scale-90 transition-all duration-300"
              aria-label="Close sidebar"
            >
              <FiX size={24} className="text-gray-300" />
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex-1 p-6 relative z-10">
            <ul className="space-y-3">
              {menuItems.map((item, index) => (
                <li
                  key={item.id}
                  className="opacity-0 animate-slide-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link
                    href={item.href}
                    className="relative flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-800/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all duration-300 text-gray-200 overflow-hidden group"
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        closeSidebar();
                      }
                    }}
                  >
                    {/* Icon with gradient background */}
                    <div className="p-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300">
                      {item.icon}
                    </div>
                    {/* Title with underline effect */}
                    <span className="relative text-lg font-medium">
                      {item.title}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                    </span>
                    {/* Ripple effect span */}
                    <span className="absolute inset-0 bg-blue-500/30 opacity-0 group-active:animate-ripple rounded-xl" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div className="p-6 border-t border-gray-600/20 relative z-10">
            <ul className="flex justify-center space-x-6">
              <li>
                <a
                  href="https://www.linkedin.com/in/kenji-ding-50308527b/"
                  target="_blank"
                  className="p-3 rounded-full text-blue-400 hover:bg-blue-600 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kenjiding"
                  target="_blank"
                  className="p-3 rounded-full text-gray-400 hover:bg-gray-600 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
                >
                  <FaGithub size={24} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:kenjiding807@gmail.com"
                  target="_blank"
                  className="p-3 rounded-full text-green-400 hover:bg-green-600 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
                >
                  <MdOutlineMarkEmailRead size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }

        @keyframes ripple {
          0% {
            opacity: 1;
            transform: scale(0);
          }
          100% {
            opacity: 0;
            transform: scale(3);
          }
        }

        .animate-ripple {
          animation: ripple 0.6s linear;
        }
      `}</style>
    </>
  );
};

export default MobileSidebar;