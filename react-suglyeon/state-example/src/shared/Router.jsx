import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UseState from "../pages/UseState";
import UseEffect from "../pages/UseEffect";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/state"} element={<UseState />} />
        <Route path={"/effect"} element={<UseEffect />} />
        {/* <Route path={"/ref"} element={<Home />} /> */}
        {/* <Route path={"/context"} element={<Home />} /> */}
        {/* <Route path={"/reactMemo"} element={<Home />} /> */}
        {/* <Route path={"/callback"} element={<Home />} /> */}
        {/* <Route path={"/memo"} element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
