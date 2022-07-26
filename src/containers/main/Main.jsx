import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./main.css"

const Main = ({routes}) => {
  
  
  return (
    <div>
    
       <Routes>
            {routes.map((route, index) => (
             
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.main />}
              />
            ))}
          </Routes>
    </div>
  )
}

export default Main