import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import background from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns/esm';


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

   

    return (
        <div className="hero  bg-base-200 " style={{backgroundImage: `url(${background})`}}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt=''  className="max-w-sm rounded-lg shadow-2xl" />

                <div className='mr-6 sm:w-full'>
                <DayPicker 
                mode='single'
                selected={selectedDate}
                onSelect={setSelectedDate}
                />
               
                </div>
           </div>
        </div>
    );
};

export default AppointmentBanner;