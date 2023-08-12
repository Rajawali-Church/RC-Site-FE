import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../Breadcrumb';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function DetailVolunteer() {

    const { id } = useParams();

    const user = useSelector((state) => state.user.users);

    const api_url = import.meta.env.VITE_API_URL;
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + user.token};

    const [volunteer, setVolunteer] = useState({});

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(api_url + `/volunteer/${id}`, { headers });

                setVolunteer(res.data.data);
            } catch (err) {
                console.log(err);
            }
        }

        fetch();
    }, []);

    const handleDelete = async () => {
        try {
            const res = await axios.delete(api_url + `/volunteer/${id}`, { headers });

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="text-black dark:text-white p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <Breadcrumb paths={['Volunteer', 'Detail', id]} />

                <div className='my-8'></div>

                <button onClick={handleDelete} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-5'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-base font-semibold'>Name</p>
                        <p className='text-sm'>{`${volunteer?.user?.full_name} (${volunteer?.user?.username})`}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-base font-semibold'>Last Modified</p>
                        <p className='text-sm'>{volunteer?.updated_at}</p>
                    </div>
                    <div className='flex flex-col gap-1 col-span-2'>
                        <p className='text-base font-semibold'>Role</p>
                        <p className='text-sm'>{volunteer?.role}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-base font-semibold'>Event Name</p>
                        <p className='text-sm line-clamp-4'>{volunteer?.event?.name}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-base font-semibold'>Event Date</p>
                        <p className='text-sm line-clamp-4'>{volunteer?.event?.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailVolunteer;