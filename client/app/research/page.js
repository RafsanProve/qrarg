'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ResearchCard from "../components/research/ResearchCard";
import {Roboto_Condensed} from "next/font/google";
// import FilterBox from "../components/research/FilterBox";
// import SearchBar from "../components/research/SearchBar";
import InfoSection from "../components/research/InfoSection";
import data from "../data/research_paper.json";
import React, { useState } from "react";
import { Slider, FormGroup, FormControlLabel } from '@mui/material';

const roboto = Roboto_Condensed({
      weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
      style: ["normal", "italic"],
      subsets: ["latin"],
});  

export default function ResearchesPage() {
  const [filteredResults, setFilteredResults] = useState(data);

  
  const getMinYear = () => {
    const years = data.map(research => research.date.split('-')[2]);
    return Math.min(...years);
  }
  const getMaxYear = () => {
    const years = data.map(research => research.date.split('-')[2]);
    return Math.max(...years);
  }
  const getFields = () => {
    const fields = data.map(research => research.fields);
    var set = new Set();
    fields.forEach(field => (field.forEach(f => set.add(f))));
    // console.log(set);
    return Array.from(set);
  }

  const [yearRange, setYearRange] = useState([getMinYear(), getMaxYear()]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedFields, setSelectedFields] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('null');
  // const [itemsPerPage, setItemsPerPage] = useState(10);

  const categories = [
    'Journal',
    'Books',
    'Conference Paper',
    'On going Research',
  ];

  const fields = getFields();
  // [
  //   'Machine Intelligence & Learning',
  //   'Robotics & Mechatronics',
  //   'Intelligent Communication System',
  //   'Quantum Mechanics and Computing',
  //   'Security in Robotics and Intelligent System',
  // ];

  console.log(fields);

  const onFilterChange = ({ yearRange, categories, fields }) => {

    const filtered = data.filter(research => {
      const year = research.date.split('-')[2];
      const yearMatch = year >= yearRange[0] && year <= yearRange[1];
      const categoryMatch = categories.length === 0 || categories.includes(research.category);
      const fieldMatch = fields.length === 0 || fields.every(field => research.fields.some(tag => tag.includes(field)));
      
      return yearMatch && categoryMatch && fieldMatch;
    });
  

    setFilteredResults(filtered);
  };  

  const handleYearChange = (event, newValue) => {
    setYearRange(newValue);
    onFilterChange({ yearRange: newValue, categories: selectedCategories, fields: selectedFields });
  };

  const handleCategoryChange = (event) => {
    const category = event.target.name;
    const updatedCategories = event.target.checked
      ? [...selectedCategories, category]
      : selectedCategories.filter(c => c !== category);
    
    setSelectedCategories(updatedCategories);
    onFilterChange({ yearRange: yearRange, categories: updatedCategories, fields: selectedFields });
  };

  const handleFieldChange = (event) => {
    const field = event.target.name;
    const updatedFields = event.target.checked
      ? [...selectedFields, field]
      : selectedFields.filter(c => c !== field);
    
    setSelectedFields(updatedFields);
    onFilterChange({ yearRange: yearRange, categories: selectedCategories , fields: updatedFields });
  };


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const onSearch = (searchTerm) => {
    const searchResults = data.filter((research) => {
      const searchString = searchTerm.toLowerCase();
      return (
        research.title.toLowerCase().includes(searchString) ||
        research.authors.some(author => author.toLowerCase().includes(searchString)) ||
        research.description.toLowerCase().includes(searchString) ||
        research.fields.some(field => field.toLowerCase().includes(searchString))
      );
    });
    
    setFilteredResults(searchResults);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    onSort(e.target.value);
  };

  const onSort = (order) => {
    const sortedResults = [...filteredResults].sort((a, b) => {
      // Split the date string and create Date objects
      const [dayA, monthA, yearA] = a.date.split('-');
      const [dayB, monthB, yearB] = b.date.split('-');
      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);
      
      if(order === 'desc')
        return dateB - dateA;
      else if(order === 'asc')
        return dateA - dateB;
      // // Return comparison based on order
      // return order === 'desc' ? dateB - dateA : dateA - dateB;
    });
    
    setFilteredResults(sortedResults);
  };

  // const handleItemsPerPageChange = (e) => {
  //   setItemsPerPage(e.target.value);
  //   onItemsPerPage(Number(e.target.value));
  // };



    return (
      <main className={roboto.className}>
        <Navbar />
        <div className="bg-zinc-800 w-full h-16"></div>
        <InfoSection />
        <div className="flex flex-col md:flex-row mx-4 md:mx-8">
          {/* Filter sidebar */}
          <div className="w-full md:w-1/5 mb-4 md:mb-0 md:sticky md:top-20 md:h-[calc(100vh-5rem)] md:overflow-hidden">
            <div className="h-full overflow-y-auto p-4 md:p-6 bg-white border border-zinc-200 rounded-lg shadow-sm">
                  <div className="mb-8">
                    <h4 className="mb-4 font-semibold text-lg text-zinc-800">Year</h4>
                    <Slider
                      className='w-11/12'
                      value={yearRange}
                      onChange={handleYearChange}
                      valueLabelDisplay="auto"
                      min={getMinYear()}
                      max={getMaxYear()}
                    />
                    <div className="flex justify-between w-11/12 mt-2 text-zinc-800">
                      <span>{yearRange[0]}</span>
                      <span>{yearRange[1]}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="mb-4 font-semibold text-lg text-zinc-800">Categories</h4>
                    <FormGroup className="space-y-2">
                      {categories.map((category) => (
                        <FormControlLabel
                          key={category}
                          control={
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(category)}
                              onChange={handleCategoryChange}
                              name={category}
                              className="w-4 h-4 rounded border-zinc-300 text-zinc-800 focus:ring-zinc-500"
                            />
                          }
                          label={<p className="ml-2 text-sm text-zinc-800">{category}</p>}
                          className="flex items-center"
                        />
                      ))}
                    </FormGroup>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="mb-4 font-semibold text-lg text-zinc-800">Fields</h4>
                    <FormGroup className="space-y-2">
                      {fields.map((fields) => (
                        <FormControlLabel
                          key={fields}
                          control={
                            <input
                              type="checkbox"
                              checked={selectedFields.includes(fields)}
                              onChange={handleFieldChange}
                              name={fields}
                              className="w-4 h-4 rounded border-zinc-300 text-zinc-800 focus:ring-zinc-500"
                            />
                          }
                          label={<p className="ml-2 text-sm text-zinc-800">{fields}</p>}
                          className="flex items-center"
                        />
                      ))}
                    </FormGroup>
                  </div>
            </div>
          </div>
        
          {/* Main content area */}
          <div className="w-full md:ml-6 md:flex-1">
            {/* Search bar container */}
            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 text-zinc-800 bg-white rounded-lg shadow border border-gray-300">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full sm:flex-1 px-4 py-2 border border-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
              <select
                value={sortOrder}
                onChange={handleSortChange}
                className="w-full sm:w-auto px-4 py-2 border border-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="null">Select Sorting</option>
                <option value="desc">Newest First</option>
                <option value="asc">Oldest First</option>
              </select>
            </div>

            {/* Research cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {filteredResults.map((research, index) => (
                <div 
                  key={`${research.id}-${index}`}
                  className="transform transition-all duration-300 ease-in-out hover:scale-102 opacity-0 animate-fade-in"
                >
                  <ResearchCard
                    title={research.title}
                    authors={research.authors}
                    tags={research.fields}
                    description={research.description}
                    imageUrl={research.imageUrl}
                    link={research.link}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
}