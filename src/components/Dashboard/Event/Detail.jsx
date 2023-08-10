import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../Breadcrumb';
import Table from '../../Table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
            await axios.delete(api_url + `/event/${id}`, { headers });

            navigate('/dashboard/event');
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(api_url + `/event/${id}/volunteer`, { headers });

                const data = res.data.data;
                
                console.log(data);

                setVolunteer(
                    [
                        {
                            id: data?.worship_lead?.id,
                            name: data?.worship_lead?.full_name,
                            role: "Worship Leader"
                        },
                        {
                            id: data?.keyboard?.id,
                            name: data?.keyboard?.full_name,
                            role: "Keyboard"
                        },
                        {
                            id: data?.guitar?.id,
                            name: data?.guitar?.full_name,
                            role: "Guitar"
                        },
                        {
                            id: data?.bass?.id,
                            name: data?.bass?.full_name,
                            role: "Bass"
                        },
                        {
                            id: data?.drum?.id,
                            name: data?.drum?.full_name,
                            role: "Drum"
                        },
                        {
                            id: data?.lcd?.id,
                            name: data?.lcd?.full_name,
                            role: "LCD"
                        },
                        {
                            id: data?.sound?.id,
                            name: data?.sound?.full_name,
                            role: "Sound"
                        },
                        {
                            id: data?.camera?.id,
                            name: data?.camera?.full_name,
                            role: "Camera"
                        },
                        {
                            id: data?.green_screen?.id,
                            name: data?.green_screen?.full_name,
                            role: "Green Screen"
                        },
                    ]
                );
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

                <Table paths={'/'} datas={volunteer} types={null} columns={columns} key={['a']} />
            </div>
        </div>
    )
}

export default Detail;