import React, { useEffect, useRef, useState } from 'react'
import Breadcrumb from '../../Breadcrumb';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

function EditVolunteer() {

    const navigate = useNavigate();
    const { id } = useParams();

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

    const user = useSelector((state) => state.user.users);

    const api_url = import.meta.env.VITE_API_URL;
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + user.token, "ngrok-skip-browser-warning": true };

    const [nameMessage, setNameMessage] = useState('');
    const [eventMessage, setEventMessage] = useState('');
    const [volunteer, setVolunteer] = useState({});
    const [users, setUsers] = useState([]);
    const [events, setEvents] = useState([]);
    const [inputData, setInputData] = useState({'user_id': null, 'event_id': null, 'role': ''});

    const nameInput = useRef(), eventInput = useRef(), copyVolunteer = useRef();

    useEffect(() => {
        const fetch = async () => {
            try {
                const vol = await axios.get(api_url + `/volunteer/${id}`, { headers });
                const us = await axios.get(api_url + '/user?per_page=1000', { headers });
                const ev = await axios.get(api_url + '/event?per_page=1000', { headers });

                copyVolunteer.current = {...vol?.data?.data};
                setVolunteer(vol.data?.data);
                setUsers(us.data?.data?.items);
                setEvents(ev.data?.data?.items);
                setInputData({...inputData, ['user_id']: vol.data?.data?.user_id, ['event_id']: vol.data?.data?.event_id, ['role']: vol.data?.data?.role});
            } catch (err) {
                console.log(err);
            }
        }

        fetch();
    }, []);

    const handleChange = (e) => {
        setInputData({...inputData, [e.target.name]: e.target.value});

        if (e.target.name == 'role') {
            setVolunteer({...volunteer, [e.target.name]: e.target.value});
        } else if (e.target.name == 'user_id') {
            let cp = {...volunteer};
            const u = users.find(obj => { return obj.id === Number(e.target.value); })
            cp.user.full_name = u.full_name, cp.user.id = u.id;
            setVolunteer(cp);
        } else if (e.target.name == 'event_id') {
            let cp = {...volunteer};
            const tmp = events.find(obj => { return obj.id === Number(e.target.value); });
            cp.event.name = tmp.event_name, cp.event.id = tmp.id;
            setVolunteer(cp);
        }

        if (e.target.name == 'event_id' && copyVolunteer.current?.event_id !== Number(e.target.value)) {
            nameInput.current.disabled = true;
            setNameMessage('Cannot change user due to the event change');
        } else if (e.target.name == 'user_id' && copyVolunteer.current?.user_id !== Number(e.target.value)) {
            eventInput.current.disabled = true;
            setEventMessage('Cannot change event due to the user change');
        } else if (e.target.name == 'event_id' && copyVolunteer.current?.event_id === Number(e.target.value)) {
            nameInput.current.disabled = false;
            setNameMessage('');
        } else if (e.target.name == 'user_id' && copyVolunteer.current?.user_id === Number(e.target.value)) {
            eventInput.current.disabled = false;
            setEventMessage('');
        }
    }

    const handleSubmit = async () => {
        try {
            const res = await axios.put(api_url + `/volunteer/${id}`, inputData, { headers });

            console.log(res.data.data);
            navigate(`/dashboard/event/${inputData?.event_id}`);
            toast.success(`Edit a Volunteer Success (${res.data.data.id})`);
        } catch (err) {
            toast.error(`Error editing volunteer: ${err.response.data.message ?? 'undefined'}`);
            console.log(err.response.data);
        }
    }

    return (
        <div className="text-black dark:text-white p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <Breadcrumb paths={['Volunteer', 'Edit', id]} />

                <div className='my-8'></div>

                <div className='grid grid-cols-2 gap-y-5'>
                    <div className='relative flex flex-col gap-1'>
                        <p className='text-base font-semibold'>Name</p>
                        <select ref={nameInput} onChange={handleChange} name='user_id' value={volunteer?.user?.id} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            {users?.map((item, key) => (
                                <option value={item?.id} key={key}>{item?.full_name}</option>
                            ))}
                        </select>
                        <p className='absolute text-red-600 text-xs -bottom-4 left-3'>{nameMessage}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-base font-semibold'>Last Modified</p>
                        <p className='text-sm'>{volunteer?.updated_at}</p>
                    </div>
                    <div className='flex flex-col gap-1 col-span-2'>
                        <p className='text-base font-semibold'>Role</p>
                        <select onChange={handleChange} name='role' value={volunteer?.role} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            {role?.map((item, key) => (
                                <option value={item?.label} key={key}>{item?.value}</option>
                            ))}
                        </select>
                    </div>
                    <div className='relative flex flex-col gap-1'>
                        <p className='text-base font-semibold'>Event Name</p>
                        <select ref={eventInput} onChange={handleChange} name='event_id' value={volunteer?.event?.id} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            {events?.map((item, key) => (
                                <option value={item?.id} key={key}>{item?.event_name}</option>
                            ))}
                        </select>
                        <p className='absolute text-red-600 text-xs -bottom-4 left-3'>{eventMessage}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-base font-semibold'>Event Date</p>
                        <p className='text-sm line-clamp-4'>{volunteer?.event?.date}</p>
                    </div>
                </div>

                <div className='my-8'></div>
                <button onClick={handleSubmit} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
            </div>
        </div>
    )
}

export default EditVolunteer;