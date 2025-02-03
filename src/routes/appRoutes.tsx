import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { appRoutes } from "./routes"

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {appRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.path === "/" ? (
                <Navigate to="/auth" replace />
              ) : (
                <route.name />
              )
            }
          ></Route>
        )
      })}
    </Routes>
  )
}
