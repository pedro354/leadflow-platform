import { RiLogoutCircleLine } from "react-icons/ri";
import {  Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Fa42Group, FaArtstation, FaHouse, FaUser } from "react-icons/fa6";
import { AiOutlineNotification } from "react-icons/ai";
import { SiGoogleearthengine } from "react-icons/si";
import { IoIosAlert } from "react-icons/io";
type SideBarProps = {
    collapsed: boolean
}


export default function SideBar({collapsed}: SideBarProps)  {
    return (
        <div className={collapsed ? "sidebar collapsed" : "sidebar"}>
            <div className="titleLogo" style={ { display: "flex", alignItems: "center", gap: "2px" } }>
                <img width={40} height={30} src="../../public/logo-temporaria.png" alt="logo" />
                <h1 className="px-1">LeadFlow</h1>
            </div>
            <Nav vertical pills>
                <div className="sidebar-top">
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/" ><FaHouse/>Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/leads"> <FaArtstation />Leads</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/campaigns"> <AiOutlineNotification />Campaigns</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/groups"> <Fa42Group />Groups</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="/settings"> <SiGoogleearthengine />Settings</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="/reports"> <IoIosAlert />Reports</NavLink>
                    </NavItem>
                </div> 
                <div className="sidebar-bottom">
                    <NavItem className="sidebar-user">
                        <img className="avatar-user" src="/logo-user" alt="" />
                        <div className="user-info">
                        <NavLink className="user" href="/user"><FaUser/>Emily</NavLink>
                        <p className="email">emily@leadflow.com</p>
                        </div>
                    </NavItem>
                    <NavItem className="sidebar-logout">
                        <RiLogoutCircleLine className="logo-logout" />
                        <NavLink tag={RouterNavLink} to="/logout">Logout</NavLink>
                    </NavItem>
                </div>
            </Nav>
        </div>
    )
}

// Container para separar os itens do sidebar, deixando os de baixo mais "distantes" dos de cima
