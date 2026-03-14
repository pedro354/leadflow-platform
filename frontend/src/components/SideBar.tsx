import { RiLogoutCircleLine } from "react-icons/ri";
import {  Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as RouterNavLink } from "react-router-dom";

type SideBarProps = {
    collapsed: boolean
}

export default function SideBar({collapsed}: SideBarProps)  {
    return (
        <div className={collapsed ? "sidebar collapsed" : "sidebar"}>
            <div className="titleLogo" style={ { display: "flex", alignItems: "center", gap: "2px" } }>
                <img src="" alt="logo" />
                <h1>LeadFlow</h1>
            </div>
            <Nav vertical pills>
                <div className="sidebar-top">
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/" >Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/leads">Leads</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/campaigns">Campaigns</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/groups">Groups</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="/settings">Settings</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="/reports">Reports</NavLink>
                    </NavItem>
                </div> 
                <div className="sidebar-bottom">
                    <NavItem className="sidebar-user">
                        <img className="avatar-user" src="/logo-user" alt="" />
                        <div className="user-info">
                        <NavLink className="user" href="/user">Emily</NavLink>
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
