import React from 'react';
import PropTypes from "prop-types";

export const Filter = ({ filter, onChange }) => {
    return (
        <div>
            <label>Find contacts by name</label>
            <input type="text" name="filter" value={filter}  onChange={onChange} placeholder="input something"/>
        </div>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
}