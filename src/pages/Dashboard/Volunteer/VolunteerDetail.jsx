import React from 'react'
import { DetailVolunteer, NavbarLogin } from '../../../components';

function VolunteerDetail() {
    return (
        <div className="text-white">
            <NavbarLogin />

            <div className='z-10'>
                <DetailVolunteer />
            </div>
        </div>
    )
}

export default VolunteerDetail;