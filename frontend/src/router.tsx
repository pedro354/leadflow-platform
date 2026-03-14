import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import LeadsPage from "./pages/LeadsPage";
import CampaignsPage from "./pages/CampaignsPage";
import GroupsPage from "./pages/GroupsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />,
                id: "Dashboard"
            },
            {
                path: "leads",
                element: <LeadsPage />,
                id: "Leads"
            },
            {
                path: "campaigns",
                element: <CampaignsPage />,
                id: "Campaigns"
            },
            {
                path: "groups",
                element: <GroupsPage />,
                id: "Groups"
            },
        ],
    },
])

export default router