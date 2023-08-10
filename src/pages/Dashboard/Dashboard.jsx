import React, { useEffect } from "react";
import { NavbarLogin, Sidebar } from "../../components";

function Dashboard() {

    return (
        <div className="text-white">
            <NavbarLogin />

            <Sidebar />
        </div>
    )
}

export default Dashboard;