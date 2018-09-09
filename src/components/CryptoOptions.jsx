
import React from 'react';
const css = require('./CryptoOptions.css');

export const CryptoOptions = ({items, selectedItem, onChange}) => {
    return (<div className= {css.crptoOptionsContainer}>Currency Options:  
        <select className={css.crptoOptions} value={selectedItem} onChange={onChange}>
            {
                items.map(function (item, index) {
                    return <option key={index} value={item}>{item}</option>;
                })
            }
        </select>
        </div>
    )
}