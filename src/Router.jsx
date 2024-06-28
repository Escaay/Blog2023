import React from "react";
import Home from "./pages/home";
import { Suspense } from "react";
const Career = React.lazy(() => import("./pages/career"));
const Travel = React.lazy(() => import("./pages/travel"));
const Hobby = React.lazy(() => import("./pages/hobby"));
const Recent = React.lazy(() => import("./pages/recent"));
const Works = React.lazy(() => import("./pages/works"));
import "./Router.less";
import { Routes, Route } from "react-router-dom";
import NavBar from "@/components/NavBar";

function Router() {
  return (
    <div className="router">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/career"
          element={
            <Suspense>
              <Career />
            </Suspense>
          }
        ></Route>
        <Route
          path="/travel"
          element={
            <Suspense>
              <Travel />
            </Suspense>
          }
        ></Route>
        <Route
          path="/hobby"
          element={
            <Suspense>
              <Hobby />
            </Suspense>
          }
        ></Route>
        <Route
          path="/recent"
          element={
            <Suspense>
              <Recent />
            </Suspense>
          }
        ></Route>
        <Route
          path="/works"
          element={
            <Suspense>
              <Works />
            </Suspense>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default Router;
