'use client'
import React, { useState } from 'react';

const InlineRadioButtons = (props:any) =>
{
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event:any) =>
  {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
    
  };

  return (
    <div className="flex items-center space-x-4">
      {props.values.map((val: string, index: any) => (
        <label className="flex items-center" key={index}>
          <input
            type="radio"
            value={val.toLocaleLowerCase()}
            checked={selectedOption === val}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-500"
            hidden
          />
          <span className={`btn ${selectedOption === val.toLocaleLowerCase()?'bg-ct-dark-600 text-light':'bg-ct-dark-100'} p-2`}>{val}</span>
        </label>
      ))}
    </div>
  );
};

export default InlineRadioButtons;