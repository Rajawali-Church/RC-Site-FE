import React from 'react'
import { EditVolunteer, NavbarLogin } from '../../../components';

function VolunteerDetail() {
    return (
        <div className="text-white">
            <NavbarLogin />

            <div className='z-10'>
                <EditVolunteer />
            </div>
        </div>
    )
}

export default VolunteerDetail;