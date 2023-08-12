import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { DetailEvent, NavbarLogin } from '../../../components';
import { useSelector } from 'react-redux';
import axios from 'axios';

function EventDetail() {

    const user = useSelector((state) => state.user.users);

    const api_url = import.meta.env.VITE_API_URL;
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + user.token};

    const { id } = useParams();

    const [event, setEvent] = useState({});

    useEffect(() => {

        const fetch = async () => {
            try {
                const res = await axios.get(api_url + `/event/${id}`, { headers })

                setEvent(res.data.data);
            } catch (err) {
                console.log(err);
            }
        }

        fetch();

    }, []);

    return (
        <div className="text-white">
            <NavbarLogin />

            <div className='z-10'>
                <DetailEvent event={event} id={id} />
            </div>
        </div>
    )
}

export default EventDetail;