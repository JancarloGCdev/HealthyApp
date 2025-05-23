"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Exercises",
    items: [
      { name: "Home Workouts", href: "/home-workouts" },
      {
        name: "Gym Routines ▼",
        href: "/gym-routines",
        submenu: [
          { name: "Upper Body", href: "/gym-routines/upper-body" },
          { name: "Lower Body", href: "/gym-routines/lower-body" },
          { name: "Arms", href: "/gym-routines/arms" },
        ],
      },
      { name: "Stretching & Flexibility", href: "/stretching" },
    ],
  },
  {
    label: "Tips",
    items: [
      { name: "Hydration Tips", href: "/hydration-tips" },
      { name: "Sleep Habits", href: "/sleep-habits" },
      { name: "Nutrition Advice", href: "/nutrition-advice" },
    ],
  },
  {
    label: "Benefits",
    items: [
      { name: "Meditation Benefits", href: "/meditation-benefits" },
      { name: "Cardio Health", href: "/cardio" },
      { name: "Muscle Recovery", href: "/recovery" },
    ],
  },
  {
    label: "More",
    items: [
      { name: "Success Stories", href: "/success-stories" },
      { name: "Product Reviews", href: "/product-reviews" },
      { name: "Expert Interviews", href: "/interviews" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-green-600">
            FastFitGrow
          </Link>

          {/*-----------------Desktop Menu--------------------------*/}
          <div className="hidden md:flex gap-6">
            {navItems.map((section) => (
              <div key={section.label} className="relative group">
                <button className="cursor-pointer text-gray-700 font-medium hover:text-green-600">
                  {section.label}
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-150 ease-in-out z-10">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                      >
                        {item.name}
                      </Link>

                      {item.submenu && hoveredItem === item.name && (
                      <div className="absolute top-full w-56 bg-white border rounded shadow-md z-20">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-100"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/*------------------------Mobile Menu Toggle---------------------------------*/}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="text-gray-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          {navItems.map((section) => (
            <div key={section.label} className="border-b">
              <div className="px-4 py-2 font-semibold text-gray-800">
                {section.label}
              </div>
              <div className="pl-6 pb-2">
                {section.items.map((item) => (
                  <div key={item.name}>
                   <button
                      onClick={() =>
                        item.submenu
                          ? setOpenMobileSubmenu(
                              openMobileSubmenu === item.name ? null : item.name
                            )
                          : setMobileMenuOpen(false)
                      }
                      className="w-full text-left py-1 text-sm text-gray-700 hover:text-green-600"
                    >
                      {item.name}
                    </button>


                    {item.submenu && openMobileSubmenu === item.name && (
                      <div className="ml-4 mt-1">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-sm text-gray-600 hover:text-green-600"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
