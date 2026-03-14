import { useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { Outlet } from "react-router-dom";

export default function MainLayout(){
    const [collapsed, setCollapsed] = useState(false);
    function toogleSidebar() {
        setCollapsed(!collapsed);
    }
    return (
    <>
     <main className="app-container">
        <SideBar collapsed={collapsed} />
        <div className="content-area">
        <TopBar toggleSidebar={toogleSidebar}/>
        <div className="page-content">
            <Outlet />
        </div>
        </div>
     </main>
    </>
    )
}