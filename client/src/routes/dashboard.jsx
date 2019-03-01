// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import AddCircle from "@material-ui/icons/AddCircle";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import NewContractsView from "views/NewContracts/NewContractsView.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import ServiceAgreement from "views/NewContracts/ServiceAgreement.jsx";
import RainyDay from "views/NewContracts/RainyDay.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Your Contract Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/NewContractsView",
    sidebarName: "New Contract",
    navbarName: "Start a Contract",
    icon: AddCircle,
    component: NewContractsView
  },
  {
    path: "/table",
    sidebarName: "All Contracts",
    navbarName: "Table List",
    icon: "view_list",
    component: TableList
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  }
  // { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
