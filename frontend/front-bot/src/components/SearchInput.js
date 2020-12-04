import React from 'react';
import './SearchInput.css'

export default function SearchInput() {
  return (
    <select className="select-field" id="select-field">
      <option selected value="br" >Brazil</option>
      <option value="eua" >United States</option>
    </select>
  )
}