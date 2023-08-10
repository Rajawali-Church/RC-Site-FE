import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Add, NavbarLogin, Sidebar } from '../../components';
import { useSelector } from 'react-redux';
import axios from 'axios';

function EventAdd() {

    return (
        <div className="text-white">
            <NavbarLogin />

            <Sidebar />

            <Add />
        </div>
    )
}

export default EventAdd;