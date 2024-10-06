import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import { NextUIProvider } from "@nextui-org/system";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/learn" element={<LearnPage />} />
      </Route>
    )
  );
  return (
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  );
};

export default App;
