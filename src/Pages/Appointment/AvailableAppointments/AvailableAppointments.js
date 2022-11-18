import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions]=useState([]);

    useEffect(()=>{
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    },[])
    return (
        <section className='my-24 text-center text-primary font-bold'>
           <p>you have selected date:{format(selectedDate, 'PP')} </p>

           <div>
           {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                       
                    ></AppointmentOption>)
                }
           </div>
        </section>
    );
};

export default AvailableAppointments;