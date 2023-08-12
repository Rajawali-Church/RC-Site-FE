import React, { useEffect } from "react";
import { EventList, NavbarLogin } from "../../../components";

function IndexEvent() {

    return (
        <div className="text-white">
            <NavbarLogin />
            
            <div className='z-10'>
                <EventList />
            </div>
        </div>
    )
}

export default IndexEvent;