"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CreditCard,
  ShieldAlert,
  X,
} from "lucide-react";

interface SidebarProps {
  mobileOpen?: boolean;
  onClose?: () => void;
}

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Transactions",
    href: "/transactions",
    icon: CreditCard,
  },
  {
    name: "Disputes",
    href: "/disputes",
    icon: ShieldAlert,
  },
];

export default function Sidebar({
  mobileOpen = true,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-64 flex-col
          bg-[rgb(36,3,199)] text-white shadow-xl
          transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d71920] font-bold text-white">
              TDP
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight">TD Portal</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">

          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;

              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    group flex items-center gap-3 rounded-lg px-4 py-3
                    text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#d71920] text-white shadow-lg shadow-red-900/20"
                        : "text-gray-400 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  <Icon
                    size={19}
                    className={
                      isActive
                        ? "text-white"
                        : "text-gray-500 transition-colors group-hover:text-white"
                    }
                  />

                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 p-4">
          <div className="rounded-lg bg-white/5 p-4">
            <p className="text-xs font-medium text-gray-400">
              Transactions Dispute Portal
            </p>

            <p className="mt-1 text-xs text-gray-600">
              Transaction Management
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}