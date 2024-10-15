import React from 'react';

const HeadingTitle = ({title, subtitle}) => {
    return (
        <div className='font-teko text-center tracking-widest text-3xl my-4'>
            <p>{title}</p>
            <h2 className='text-white text-6xl w-[750px] mx-auto font-semibold py-2'>{subtitle}</h2>
        </div>
    );
};

export default HeadingTitle;