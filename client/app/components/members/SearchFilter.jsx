"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Check, ChevronDown, ExternalLink, Search, X } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"


export default function SearchFilter({ members, setFilteredMembers }) {
    // State for search and filters
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTeachingAreas, setSelectedTeachingAreas] = useState([])
  const [selectedResearchAreas, setSelectedResearchAreas] = useState([])
  const [isGraduateAdvisor, setIsGraduateAdvisor] = useState(false)

  // State for dropdown visibility
  const [teachingDropdownOpen, setTeachingDropdownOpen] = useState(false)
  const [researchDropdownOpen, setResearchDropdownOpen] = useState(false)

  // Filtered experts
  const [filteredExperts, setFilteredExperts] = useState(experts)

  // Apply filters when any filter changes
  useEffect(() => {
    let result = experts

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (expert) => expert.name.toLowerCase().includes(query) || expert.title.toLowerCase().includes(query),
      )
    }

    // Apply teaching areas filter
    if (selectedTeachingAreas.length > 0) {
      result = result.filter((expert) => selectedTeachingAreas.some((area) => expert.teachingAreas.includes(area)))
    }

    // Apply research areas filter
    if (selectedResearchAreas.length > 0) {
      result = result.filter((expert) => selectedResearchAreas.some((area) => expert.areas.includes(area)))
    }

    // Apply graduate advisor filter
    if (isGraduateAdvisor) {
      result = result.filter((expert) => expert.isGraduateAdvisor)
    }

    setFilteredExperts(result)
  }, [searchQuery, selectedTeachingAreas, selectedResearchAreas, isGraduateAdvisor])

  // Toggle teaching area selection
  const toggleTeachingArea = (area) => {
    setSelectedTeachingAreas((prev) => (prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]))
  }

  // Toggle research area selection
  const toggleResearchArea = (area) => {
    setSelectedResearchAreas((prev) => (prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]))
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("")
    setSelectedTeachingAreas([])
    setSelectedResearchAreas([])
    setIsGraduateAdvisor(false)
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (teachingDropdownOpen || researchDropdownOpen) {
        // Check if the click is outside the dropdowns
        if (!event.target.closest(".teaching-dropdown") && !event.target.closest(".research-dropdown")) {
          setTeachingDropdownOpen(false)
          setResearchDropdownOpen(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [teachingDropdownOpen, researchDropdownOpen])

return (
    <div className="mb-8">
    <h2 className="text-xl font-bold mb-4">FILTER BY</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          placeholder="Search experts..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Teaching Areas Dropdown */}
      <div className="relative teaching-dropdown">
        <Button
          variant="outline"
          className="w-full justify-between"
          onClick={() => {
            setTeachingDropdownOpen(!teachingDropdownOpen)
            setResearchDropdownOpen(false)
          }}
        >
          Teaching areas
          {selectedTeachingAreas.length > 0 && (
            <span className="ml-1 text-xs bg-primary text-white rounded-full px-2 py-0.5">
              {selectedTeachingAreas.length}
            </span>
          )}
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>

        {teachingDropdownOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-slate-200 rounded-md shadow-lg max-h-60 overflow-auto">
            <div className="p-2 border-b border-slate-200 flex justify-between items-center">
              <span className="font-medium">Select Teaching Areas</span>
              {selectedTeachingAreas.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedTeachingAreas([])}
                  className="h-7 text-xs"
                >
                  Clear
                </Button>
              )}
            </div>
            <div className="p-2">
              {teachingAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center p-2 hover:bg-slate-100 cursor-pointer rounded-md"
                  onClick={() => toggleTeachingArea(area)}
                >
                  <div
                    className={`w-4 h-4 border rounded-sm mr-2 flex items-center justify-center ${selectedTeachingAreas.includes(area) ? "bg-primary border-primary" : "border-slate-300"}`}
                  >
                    {selectedTeachingAreas.includes(area) && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Research Areas Dropdown */}
      <div className="relative research-dropdown">
        <Button
          variant="outline"
          className="w-full justify-between"
          onClick={() => {
            setResearchDropdownOpen(!researchDropdownOpen)
            setTeachingDropdownOpen(false)
          }}
        >
          Research areas
          {selectedResearchAreas.length > 0 && (
            <span className="ml-1 text-xs bg-primary text-white rounded-full px-2 py-0.5">
              {selectedResearchAreas.length}
            </span>
          )}
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>

        {researchDropdownOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-slate-200 rounded-md shadow-lg max-h-60 overflow-auto">
            <div className="p-2 border-b border-slate-200 flex justify-between items-center">
              <span className="font-medium">Select Research Areas</span>
              {selectedResearchAreas.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedResearchAreas([])}
                  className="h-7 text-xs"
                >
                  Clear
                </Button>
              )}
            </div>
            <div className="p-2">
              {researchAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center p-2 hover:bg-slate-100 cursor-pointer rounded-md"
                  onClick={() => toggleResearchArea(area)}
                >
                  <div
                    className={`w-4 h-4 border rounded-sm mr-2 flex items-center justify-center ${selectedResearchAreas.includes(area) ? "bg-primary border-primary" : "border-slate-300"}`}
                  >
                    {selectedResearchAreas.includes(area) && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="graduate-advisors"
          className="h-4 w-4"
          checked={isGraduateAdvisor}
          onChange={(e) => setIsGraduateAdvisor(e.target.checked)}
        />
        <label htmlFor="graduate-advisors" className="text-sm">
          Primary graduate advisors
        </label>
      </div>
    </div>

    {/* Active filters */}
    {(selectedTeachingAreas.length > 0 ||
      selectedResearchAreas.length > 0 ||
      searchQuery ||
      isGraduateAdvisor) && (
      <div className="mt-4">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm font-medium">Active filters:</span>

          {searchQuery && (
            <div className="bg-slate-100 text-sm rounded-full px-3 py-1 flex items-center">
              Search: {searchQuery}
              <button onClick={() => setSearchQuery("")} className="ml-1 text-slate-500 hover:text-slate-700">
                <X className="h-3 w-3" />
              </button>
            </div>
          )}

          {selectedTeachingAreas.map((area) => (
            <div key={area} className="bg-slate-100 text-sm rounded-full px-3 py-1 flex items-center">
              Teaching: {area}
              <button
                onClick={() => toggleTeachingArea(area)}
                className="ml-1 text-slate-500 hover:text-slate-700"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}

          {selectedResearchAreas.map((area) => (
            <div key={area} className="bg-slate-100 text-sm rounded-full px-3 py-1 flex items-center">
              Research: {area}
              <button
                onClick={() => toggleResearchArea(area)}
                className="ml-1 text-slate-500 hover:text-slate-700"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}

          {isGraduateAdvisor && (
            <div className="bg-slate-100 text-sm rounded-full px-3 py-1 flex items-center">
              Graduate Advisors
              <button
                onClick={() => setIsGraduateAdvisor(false)}
                className="ml-1 text-slate-500 hover:text-slate-700"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}

          <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm text-slate-600">
            Clear all filters
          </Button>
        </div>
      </div>
    )}
  </div>
    );
};
