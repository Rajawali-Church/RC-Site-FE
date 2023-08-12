import React from 'react'
import { AddVolunteer, NavbarLogin } from '../../../components';

function VolunteerAdd() {
    return (
        <div className="text-white">
            <NavbarLogin />

            <div className='z-10'>
                <AddVolunteer />
            </div>
        </div>
    )
}

export default VolunteerAdd;