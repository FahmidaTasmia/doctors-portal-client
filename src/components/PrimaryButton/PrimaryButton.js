import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button 
        className="btn border-none bg-primary text-white md:text-lg ">{children}</button>
    );
};

export default PrimaryButton;