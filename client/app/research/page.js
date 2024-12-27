'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ResearchCard from "../components/research/ResearchCard";
import {Roboto_Condensed} from "next/font/google";
// import FilterBox from "../components/research/FilterBox";
import SearchBar from "../components/research/SearchBar";
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


    return (
      <main className={roboto.className}>
        <Navbar />
        <div className="bg-zinc-800 w-full h-16"></div>
        <InfoSection />
        <div className="flex mx-8">
          {/* Sticky FilterBox */}
          <div className="sticky top-20 w-1/5 h-screen overflow-y-auto">
              <div className="sticky top-16 h-screen p-6 bg-white border border-zinc-200 rounded-lg shadow-sm">
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
        
          {/* Research Cards Grid */}
          <div className="ml-6 flex-1">
          <SearchBar />
            <div className="grid grid-cols-3">
              {filteredResults.map((research) => (
                <ResearchCard
                  key={research.id}
                  title={research.title}
                  authors={research.authors}
                  description={research.description}
                  imageUrl={research.imageUrl}
                  link={research.link}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
}