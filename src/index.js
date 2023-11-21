import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store'
import { Provider } from 'react-redux'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Dashboard from './features/dashboard/Dashboard';
import Login from './features/user/Login';
import AddTicket from './features/dashboard/AddTicket';
import ListTickets from './features/dashboard/ListTickets';

  const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
            {
                path:"",
                element:<Login></Login>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>,
                children:[
                    {
                        path:"/dashboard/addTicket",
                        element:<AddTicket></AddTicket>
                    },
                    {
                        path:"/dashboard/",
                        element:<ListTickets></ListTickets>
                    },
                    {
                        path:"/dashboard/listTickets",
                        element:<ListTickets></ListTickets>
                    }
                ]

            }
        ]
    },
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
