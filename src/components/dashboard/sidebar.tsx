"use client";
import React, { useState, useEffect } from 'react';
import Header from "@/components/dashboard/heroheader";
import { Content1 } from "@/components/dashboard/barchart";
import { Piechart } from "@/components/dashboard/piechart";
import { Menu } from "lucide-react";

export const SidebarWithContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [blockContent, setBlockContent] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Lock scroll on the body when the sidebar is open
    if (isSidebarOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup function to remove overflow-hidden if component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isSidebarOpen]);

  const links = [
    { category: 'Getting Started', items: ['Introduction'] },
    {
      category: 'Dashboard',
      items: ['Product', 'Conversation', 'Footer', 'Pricing', 'Hero'],
    }
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleLinkClick = async (item: string) => {
    if (item.toLowerCase() === 'cta') {
      try {
        const response = await fetch(`/api/blocks/cta`);
        if (!response.ok) throw new Error('Failed to fetch CTA content');
        const content = await response.text();
        setBlockContent(content);
      } catch (error) {
        console.error('Error fetching CTA content:', error);
        setBlockContent('Error loading content');
      }
    } else {
      setBlockContent(null);
    }
    setIsSidebarOpen(false);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen relative">
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute top-4 left-4 z-20 text-gray-600 sm:hidden"
      >
        <Menu size={24} />
      </button>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={closeSidebar}
        />
      )}
      <aside
        className={`fixed top-0 left-0 z-20 h-screen w-60 bg-white shadow-md p-4 sm:p-6 flex flex-col justify-between transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Search..."
            className="mb-4 p-2 w-full border border-gray-300 rounded"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <nav className="space-y-8 text-sm h-full overflow-y-auto">
            {links.map((section) => (
              <div className="space-y-2" key={section.category}>
                <div className="flex items-center space-x-2">
                  <h2 className="text-sm font-semibold tracking-widest uppercase">
                    {section.category}
                  </h2>
                </div>
                <div className="flex flex-col space-y-1">
                  {section.items
                    .filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((item) => (
                      <a
                        key={item}
                        href="#"
                        onClick={() => handleLinkClick(item)}
                        className="block p-1 hover:bg-gray-200 rounded transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50 overflow-y-auto pt-16 transition-all duration-300">
        {blockContent ? (
          <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: blockContent }} />
        ) : (
          <div className="text-gray-700">
            <Header />
            <Content1 />
            <Piechart />
          </div>
        )}
      </main>
    </div>
  );
};

export default SidebarWithContent;
