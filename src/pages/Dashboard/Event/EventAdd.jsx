import React from 'react'
import { AddEvent, NavbarLogin } from '../../../components';

function EventAdd() {

    return (
        <div className="text-white">
            <NavbarLogin />

            <div className='z-10'>
                <AddEvent />
            </div>
        </div>
    )
}

export default EventAdd;