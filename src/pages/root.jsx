import React from "react";
import { Outlet } from "react-router-dom";
import RegularNav from "../RegularNav";

export default function Root() {
    return(
        <>
        <RegularNav/>
        <Outlet/>
        </>
    )
}