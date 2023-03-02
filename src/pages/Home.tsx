import React from "react";
import { LdTypo } from "@emdgroup-liquid/liquid/dist/react";

type Props = React.HTMLProps<HTMLDivElement>;

function Home(props: Props): JSX.Element {
  const { className } = props;

  return (
    <div className={`${className || ""}`}>
      <LdTypo variant="h1">Home</LdTypo>
    </div>
  );
}

export default Home;
