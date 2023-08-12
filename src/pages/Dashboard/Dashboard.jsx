import React, { useEffect } from "react";
import { NavbarLogin } from "../../components";
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    useEffect(() => {
        navigate('/dashboard/event');
    }, [])

    return (
        <div className="text-white">
            <NavbarLogin />

            <div className='z-10'>
                
            </div>
        </div>
    )
}

export default Dashboard;