import React from "react";
import { useRouteError } from "react-router-dom";

import { LdTypo } from "@emdgroup-liquid/liquid/dist/react";

type Props = React.HTMLProps<HTMLDivElement>;

function Error(props: Props): JSX.Element {
  const { className } = props;

  const error: any = useRouteError();

  return (
    <div className={`${className}`}>
      <LdTypo variant="h1">Oops, you shouldn't be here</LdTypo>
      <LdTypo>{error.statusText || error.message}</LdTypo>
    </div>
  );
}

export default Error;
