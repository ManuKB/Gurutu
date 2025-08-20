import Home from "@mui/icons-material/Home";
import { AllInbox, NewLabel, Search } from "@mui/icons-material";

export const NavBarConfig = [
  {
    name: "Home",
    path: "/dashboard",
    icon: <Home />,
  },
  {
    name: "New",
    path: "/New",
    icon: <NewLabel />,
  },

  {
    name: "Search",
    path: "/Search",
    icon: <Search />,
  },
];
