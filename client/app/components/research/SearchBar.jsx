'use client'

import React, { useState } from 'react';

export default function SearchBar({ onSearch, onSort, onItemsPerPage }){
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    onSort(e.target.value);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(e.target.value);
    onItemsPerPage(Number(e.target.value));
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow border border-gray-300">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="text-zinc-800 flex-1 px-4 py-2 border border-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <select
        value={sortOrder}
        onChange={handleSortChange}
        className="text-zinc-800 px-4 py-2 border border-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="desc">Newest First</option>
        <option value="asc">Oldest First</option>
      </select>

      <select
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
        className="text-black px-4 py-2 border border-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value={5}>5 per page</option>
        <option value={10}>10 per page</option>
        <option value={20}>20 per page</option>
        <option value={50}>50 per page</option>
      </select>
    </div>
  );
};
