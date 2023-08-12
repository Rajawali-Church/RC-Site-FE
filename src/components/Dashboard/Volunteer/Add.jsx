import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../Breadcrumb';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Add() {

    const navigate = useNavigate();
    const user = useSelector((state) => state.user.users);

    const api_url = import.meta.env.VITE_API_URL;
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + user.token};

    const month = [
        {label: 0, value: '-'},
        {label: 1, value: 'January'},
        {label: 2, value: 'February'},
        {label: 3, value: 'March'},
        {label: 4, value: 'April'},
        {label: 5, value: 'May'},
        {label: 6, value: 'June'},
        {label: 7, value: 'July'},
        {label: 8, value: 'August'},
        {label: 9, value: 'September'},
        {label: 10, value: 'October'},
        {label: 11, value: 'November'},
        {label: 12, value: 'December'},
    ];
    const role = [
        {label: 'worship_lead', value: 'Worship Leader'},
        {label: 'keyboard', value: 'Keyboard'},
        {label: 'guitar', value: 'Guitar'},
        {label: 'bass', value: 'Bass'},
        {label: 'drum', value: 'Drum'},
        {label: 'lcd', value: 'LCD'},
        {label: 'sound', value: 'Sound'},
        {label: 'camera', value: 'Camera'},
        {label: 'green_screen', value: 'Green Screen'},
    ];
    const [year, setYear] = useState([]);
    const [event, setEvent] = useState([]);

    const [chMonth, setChMonth] = useState(0);
    const [chYear, setChYear] = useState(0);

    const [inputData, setInputData] = useState({ 'user_id': user.id, 'event_id': null, role: '' });

    useEffect(() => {
        const res = ['-'];
        for (let i = 2023; i < 2200; i++) {
            res.push(i);
        }
        setYear(res);
    }, []);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios(api_url + `/event?per_page=10000&${Number(chMonth) !== 0 ? `month=${chMonth}&` : ''}${chYear !== '-' ? `year=${chYear}` : ''}`, { headers });

                setInputData({...inputData, ['event_id']: res.data?.data?.items?.[0]?.id, ['role']: role?.[0]?.label});

                setEvent(res.data.data.items);
            } catch (err) {
                console.log(err);
            }
        }

        fetch();
    }, [chMonth, chYear]);

    const handleSubmit = async () => {
        if (!confirm("Are you sure all the datas is correct?")) return;
        
        try {
            const res = await axios.post(api_url + '/volunteer', inputData, { headers });

            navigate(`/dashboard/event/${inputData?.event_id}`);
            toast.success(`Success adding ${user?.full_name} to ${res.data.data.event_name} as ${inputData?.role}`);
        } catch (err) {
            toast.error(`Error adding event ${err.response.data.message ?? 'undefined'}`);
            console.log(err);
        }
    }

    return (
        <div className="text-black dark:text-white p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <Breadcrumb paths={['Volunteer', 'Add']} />

                <div className='my-8'></div>

                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-2'>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Month <span className='opacity-40 text-xs'>(optional filter)</span></label>
                        <select onChange={(e) => setChMonth(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required >
                            {month.map((item, key) => (
                                <option value={item?.label} key={key}>{item?.value}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year <span className='opacity-40 text-xs'>(optional filter)</span></label>
                        <select onChange={(e) => setChYear(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required >
                            {year.map((item, key) => (
                                <option key={key}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className='col-span-2 mb-6'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event <span className='text-red-600'>*</span></label>
                        <select onChange={(e) => setInputData({...inputData, ['event_id']: Number(e.target.value)})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required >
                            {event.map((item, key) => (
                                <option value={item?.id} key={key}>{`${item?.event_name} (${item?.date}) [${item?.type}]`}</option>
                            ))}
                        </select>
                    </div>
                    <div className='mb-6'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role <span className='text-red-600'>*</span></label>
                        <select onChange={(e) => setInputData({...inputData, ['role']: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required >
                            {role.map((item, key) => (
                                <option value={item?.label} key={key}>{item?.value}</option>
                            ))}
                        </select>
                    </div>

                </div>

                <div className='my-8' />
                <button onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
        </div>
    )
}

export default Add;