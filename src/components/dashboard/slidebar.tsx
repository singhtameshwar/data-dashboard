"use client";
import React, { useState } from 'react';
import Header from"@/components/dashboard/heroheader"
import {Content1} from"@/components/dashboard/content1"
import {Content2} from"@/components/dashboard/content2"

export const SidebarWithContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [blockContent, setBlockContent] = useState<string | null>(null);

  const links = [
    { category: 'Getting Started', items: ['Introduction'] },
    {
      category: 'Dashboard',
      items: ['product', 'conversation', 'Footer', 'Pricing'],
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
  };

  return (
    <div className='pt-4'>
    <div className="flex min-h-screen">
      <aside className="w-full h-full p-6 sm:w-60">
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
              <h2 className="text-sm font-semibold tracking-widest uppercase">
                {section.category}
              </h2>
              <div className={`flex flex-col space-y-1 ${section.category === 'Dashboard' ? 'flex-grow' : ''}`}>
                {section.items
                  .filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((item) => (
                    <a
                      key={item}
                      rel="noopener noreferrer"
                      href=""
                      onClick={() => handleLinkClick(item)}
                      className="block p-1 hover:bg-gray-200 rounded"
                    >
                      {item}
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-50">
        {blockContent ? (
          <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: blockContent }} />
        ) : (
          <div className="text-gray-700">
       <Header/>
       <Content1/>
       <Content2/>
          </div>
        )}
      </main>
    </div>
    </div>
  );
};

export default SidebarWithContent;