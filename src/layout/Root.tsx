import React from "react";
import { Outlet } from "react-router-dom";
import { LdSidenav, LdTypo } from "@emdgroup-liquid/liquid/dist/react";
import Sidebar from "../components/Sidebar";
import Breadcrumps from "../components/Breadcrumps";

type Props = React.HTMLProps<HTMLDivElement>;

function Root(props: Props): JSX.Element {
  const { className } = props;
  return (
    <div className={`${className} flex`}>
      <Sidebar></Sidebar>
      <div className="px-20 py-4">
        <Breadcrumps className="block mb-5"></Breadcrumps>
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
