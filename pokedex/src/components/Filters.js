import React from 'react';

const Filters = ({ types, regions, selectedType, selectedRegion, onTypeChange, onRegionChange }) => {
  return (
    <div className="p-4">
      <div className="flex space-x-4">
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
          <select
            id="type"
            value={selectedType}
            onChange={onTypeChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="region" className="block text-sm font-medium text-gray-700">Region</label>
          <select
            id="region"
            value={selectedRegion}
            onChange={onRegionChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
