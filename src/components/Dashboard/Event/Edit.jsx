import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../Breadcrumb';
import Table from '../../Table';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Edit({event, id}) {

    const navigate = useNavigate();

    const user = useSelector((state) => state.user.users);

    const api_url = import.meta.env.VITE_API_URL;
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + user.token};

    const [inputData, setInputData] = useState({});

    useEffect(() => {
        setInputData(event);
    }, [event]);

    const handleChange = (e) => {
        setInputData({...inputData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async () => {
        try {
            const res = await axios.put(api_url + `/event/${id}`, 
                {
                    "name": inputData?.event_name,
                    "date": inputData?.date,
                    "type": inputData?.type,
                    "description": inputData?.description,
                },
                { headers }
            )

            navigate('/dashboard/event');
            toast.success(`Update an Event Success (${res.data.data.event_name})`);
        } catch (err) {
            toast.error(`Error adding event ${err?.response?.data?.message ?? 'undefined'}`);
            console.log(err);
        } 
    }

    return (
        <div className="text-black dark:text-white p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <Breadcrumb paths={['Event', 'Edit', id]} />

                <div className='my-8'></div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-5'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-base font-semibold'>Event Name</p>
                        <input onChange={handleChange} name='event_name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={inputData?.event_name} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-base font-semibold'>Date</p>
                        <input onChange={handleChange} name='date' type='date' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={inputData?.date} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-base font-semibold'>Type</p>
                        <select onChange={handleChange} name='type' value={inputData?.type} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            <option>weekly</option>
                            <option>special</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-1 col-span-2'>
                        <p className='text-base font-semibold'>Description</p>
                        <input onChange={handleChange} name='description' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={inputData?.description} />
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
                <button onClick={handleSubmit} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
            </div>
        </div>
    )
}

export default Edit;