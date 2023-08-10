import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { deleteUser } from '../redux/sliceUser';

function ProtectingRoute(props) {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.users.token);
    
    const dispatch = useDispatch();

    const api_url = import.meta.env.VITE_API_URL;
    const headers = { 'Authorization': 'Bearer ' + user };

    useEffect(() => {
        const fetch = async () => {
            try {
                await axios.get(api_url + `/me`, { headers } );
            } catch (err) {
                dispatch(deleteUser());
                console.log(err);

                navigate('/');
            }
        }
        
        fetch();

        return () => {}
    }, [user])
    return props.children;
}

export default ProtectingRoute