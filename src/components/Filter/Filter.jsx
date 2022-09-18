import React from 'react';
import { nanoid } from 'nanoid';

export const Filter = ({ filter, onChange }) => {
    return (
        <div>
            <label htmlFor={nanoid()}>
                <input id={nanoid()} filter={filter} type="text" onChange={onChange}/></label>
        </div>
    )
}