import React from "react";
import { Link } from "react-router-dom";
import Select from "react-dropdown-select";
import Dropdown from 'react-dropdown-select';
const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
  ];

const FilterinCard = () =>  {
    return (
    <div className="flex justify-between">
        <div className="flex gap-5">
            <div className="custom-dropdown-container">
                <Dropdown
                options={options}
                placeholder = "State"
                /* Other props */
                />
            </div>
            <div className="custom-dropdown-container">
                <Dropdown
                options={options}
                placeholder = "Status"
                /* Other props */
                />
            </div>
            <div className="custom-dropdown-container">
                <Dropdown
                options={options}
                placeholder = "Quantity"
                /* Other props */
                />
            </div>
            <div className="custom-dropdown-container">
                <Dropdown
                options={options}
                placeholder = "Price"
                /* Other props */
                />
            </div>
        </div>
        <div>
        <div className="custom-dropdown-container-filter">
                <Dropdown
                options={options}
                /* Other props */
                />
            </div>
        </div>
    </div>
    )
}
export default FilterinCard