import Home from '@mui/icons-material/Home';
import Dashboard from '@mui/icons-material/Dashboard';
import ExitToApp from '@mui/icons-material/ExitToApp';
import { AllInbox, NewLabel, Search } from '@mui/icons-material';


export const NavBarConfig = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: <Dashboard />
    },
        {
        name: "New",
        path: "/New",
        icon: <NewLabel />
    },
    {
        name: "All",      
        path: "/All",
        icon: <AllInbox />
    },
       {
        name: "Search",      
        path: "/Search",
        icon: <Search />
    },

]