import React from 'react';

const Map = () => {
    return (
        <div>
            <iframe className='w-full h-[450px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385287388815!2d144.95320007583737!3d-37.81725097197469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1729171679088!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default Map;