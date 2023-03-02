import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { LdTypo } from "@emdgroup-liquid/liquid/dist/react";
import { fruits } from "../data/fruits";

type Props = React.HTMLProps<HTMLDivElement>;

function Detail(props: Props): JSX.Element {
  const { className } = props;
  let { category, fruit } = useParams();

  const { icon, title } = useMemo(() => {
    const f = fruits
      .find((x) => x.slug === category)
      ?.fruits.find((x) => x.slug === fruit);
    const fruitIcon = f?.icon;
    return { icon: fruitIcon, title: f?.name };
  }, [category, fruit]);

  return (
    <div className={`detail ${className || ""}`}>
      <LdTypo variant="h1">{title}</LdTypo>
      <div style={{ fontSize: "10rem" }}>{icon}</div>
    </div>
  );
}

export default Detail;
