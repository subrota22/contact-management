import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import AddContact from "../Components/Pages/AddContact/AddContact";
import Home from "../Components/Pages/Home/Home";
import EditContact from "../Components/Pages/EditContact/EditContact";
import ContactDetails from "../Components/Pages/ContactDetails/ContactDetails";
import Dashboard from "../Components/Pages/Dashboard/Dashboard";

export const Routers = createBrowserRouter([

    {
        path:"/", element:<MainLayOut></MainLayOut>, children:[
           {
            path:"/",element:<Home></Home>
           },
           {
            path:"/add-contact", element:<AddContact></AddContact>
           },
           {
            path:"/contact-edit/:id", element:<EditContact></EditContact>
           },
           {
            path:"/details-of-contact-info/:id", element:<ContactDetails></ContactDetails>
           },
           {
            path:"/dashboard", element:<Dashboard></Dashboard>
           },
        ]
    }
])