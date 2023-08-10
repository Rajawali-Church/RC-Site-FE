import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../Breadcrumb';
import Table from '../../Table';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function EventList() {

    const navigate = useNavigate();

    const user = useSelector((state) => state.user.users);

    const api_url = process.env.REACT_APP_API_URL;
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + user.token};

    const [datas, setDatas] = useState([]);

    const columns = ['Event Name', 'Date', 'Type', 'Note', 'Created By']

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const res = await axios.get(api_url + '/event', { headers });

                res.data.data.items.map(item => {
                    item.created_by = item.created_by.full_name;
                });

                setDatas(res.data.data.items);
            } catch (err) {
                console.log(err);
            }
        }

        fetchEvent();
    }, []);

    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <Breadcrumb paths={['Event', 'List']} />

                <div className='my-8'></div>

                <div className='w-full text-right'>
                    <button onClick={() => navigate('/dashboard/add/event')} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add Event</button>
                </div>

                <Table paths={'/dashboard/event'} types={['Weekly', 'Special']} columns={columns} datas={datas} />
            </div>
        </div>
    )
}

export default EventList;