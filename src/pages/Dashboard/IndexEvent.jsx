import React, { useEffect } from "react";
import { EventList, NavbarLogin, Sidebar } from "../../components";

function IndexEvent() {

    return (
        <div className="text-white">
            <NavbarLogin />

            <Sidebar />

            <EventList />
        </div>
    )
}

export default IndexEvent;