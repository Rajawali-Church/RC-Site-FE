import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../Breadcrumb';
import Table from '../../Table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function Detail({event, id}) {

    const navigate = useNavigate();

    const user = useSelector((state) => state.user.users);

    const api_url = import.meta.env.VITE_API_URL;
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + user.token};

    const columns = [
        'Name',
        'Role'
    ]

    const [volunteer, setVolunteer] = useState([]);

    const handleDelete = async () => {
        try {
            const res = await axios.delete(api_url + `/event/${id}`, { headers });

            navigate('/dashboard/event');
            toast.success(`Delete an Event Success (${res.data.data.event_name})`);
        } catch (err) {
            toast.error(`Error adding event ${err?.response?.data?.message ?? 'undefined'}`);
            console.log(err);
        }
    }

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(api_url + `/event/${id}/volunteer`, { headers });

                const data = res.data.data;

                setVolunteer(data);
            } catch (err) {
                console.log(err);
            }
        }

        fetch();
    }, [event]);

    return (
        <div className="text-black dark:text-white p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <Breadcrumb paths={['Event', 'Detail', id]} />

                <div className='my-8'></div>

                <button onClick={handleDelete} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-5'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-base font-semibold'>Event Name</p>
                        <p className='text-sm'>{event?.event_name}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-base font-semibold'>Date</p>
                        <p className='text-sm'>{event?.date}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-base font-semibold'>Type</p>
                        <p className='text-sm'>{event?.type}</p>
                    </div>
                    <div className='flex flex-col gap-1 col-span-2'>
                        <p className='text-base font-semibold'>Description</p>
                        <p className='text-sm line-clamp-4'>{event?.description}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-base font-semibold'>Created at</p>
                        <p className='text-sm'>{event?.created_at ?? '-'}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-base font-semibold'>Created By</p>
                        <p className='text-sm'>{event?.created_by?.full_name ?? '-'} ({event?.created_by?.username})</p>
                    </div>
                </div>

                <div className='my-8'></div>

                <Table paths={'/dashboard/volunteer'} datas={volunteer} types={null} columns={columns} />
            </div>
        </div>
    )
}

export default Detail;