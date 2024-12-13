'use client'

import React, { useState } from 'react';
import { Slider, FormGroup, FormControlLabel } from '@mui/material';

const FilterBox = ({ onFilterChange }) => {
  const [yearRange, setYearRange] = useState([2000, 2023]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Environment',
    'Social Sciences'
  ];

  const handleYearChange = (event, newValue) => {
    setYearRange(newValue);
    onFilterChange({ yearRange: newValue, categories: selectedCategories });
  };

  const handleCategoryChange = (event) => {
    const category = event.target.name;
    const updatedCategories = event.target.checked
      ? [...selectedCategories, category]
      : selectedCategories.filter(c => c !== category);
    
    setSelectedCategories(updatedCategories);
    onFilterChange({ yearRange, categories: updatedCategories });
  };

  return (
    <div className="sticky top-16 h-screen p-6 bg-white border border-zinc-200 rounded-lg shadow-sm">
      <div className="mb-8">
        <h4 className="mb-4 font-semibold text-zinc-800">Year Range</h4>
        <Slider
          value={yearRange}
          onChange={handleYearChange}
          valueLabelDisplay="auto"
          min={2000}
          max={2023}
        />
        <div className="flex justify-between mt-2 text-zinc-800">
          <span>{yearRange[0]}</span>
          <span>{yearRange[1]}</span>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="mb-4 font-semibold text-zinc-800">Categories</h4>
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
              label={<span className="ml-2 text-zinc-800">{category}</span>}
              className="flex items-center"
            />
          ))}
        </FormGroup>
      </div>
    </div>
  );
};

export default FilterBox;
