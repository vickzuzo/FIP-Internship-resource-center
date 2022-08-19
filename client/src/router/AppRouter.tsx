import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AdiminDashboardScreen,
  Dashboard,
  HomeScreen,
  InternsScreen,
  LoginScreen,
  MentorsScreen,
  RegisterScreen,
  Resources,
  VerifyAccountScreen,
} from "../screens";
import { AdminLayout, HomeLayout } from "../Sections/Layouts";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/create-account" element={<RegisterScreen />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/verify-account" element={<VerifyAccountScreen />} />
          <Route
            path="*"
            element={<p style={{ marginTop: "10rem" }}>Screen not found</p>}
          />
          <Route path="/me" element={<Dashboard />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdiminDashboardScreen />} />
          <Route path="mentors" element={<MentorsScreen />} />
          <Route path="interns" element={<InternsScreen />} />
          <Route
            path="*"
            element={<p style={{ marginTop: "10rem" }}>Screen not found</p>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
