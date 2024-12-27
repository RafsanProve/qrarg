'use client'

import React, { useState } from 'react';
import { Slider, FormGroup, FormControlLabel } from '@mui/material';

const FilterBox = ({ onFilterChange }) => {
  const [yearRange, setYearRange] = useState([2000, 2023]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedFields, setSelectedFields] = useState([]);

  const categories = [
    'Journals',
    'Books',
    'Conference Paper',
    'On going Research',
  ];

  const fields = [
    'Machine Intelligence & Learning',
    'Robotics & Mechatronics',
    'Intelligent Communication System',
    'Quantum Mechanics and Computing',
    'Security in Robotics and Intelligent System',
  ];

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
    onFilterChange({ yearRange, categories: updatedCategories, fields: selectedFields });
  };

  const handleFieldChange = (event) => {
    const field = event.target.name;
    const updatedFields = event.target.checked
      ? [...selectedFields, field]
      : selectedFields.filter(c => c !== field);
    
    setSelectedFields(updatedFields);
    onFilterChange({ yearRange, categories: selectedCategories , fields: updatedFields });
  };

  return (
    <div className="sticky top-16 h-screen p-6 bg-white border border-zinc-200 rounded-lg shadow-sm">
      <div className="mb-8">
        <h4 className="mb-4 font-semibold text-lg text-zinc-800">Year</h4>
        <Slider
          className='w-11/12'
          value={yearRange}
          onChange={handleYearChange}
          valueLabelDisplay="auto"
          min={2000}
          max={2023}
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
  );
};

export default FilterBox;
