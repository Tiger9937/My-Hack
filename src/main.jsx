import { Provider } from 'react-redux'
import store from './redux/store.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter(
  [
      {
        path : "/",
        element:<App/>,
        children: [
        ]
      }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} /> 
    </Provider>
  </React.StrictMode>,
)