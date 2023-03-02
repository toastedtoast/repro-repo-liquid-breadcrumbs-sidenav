import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { LdTypo } from "@emdgroup-liquid/liquid/dist/react";
import { fruits } from "../data/fruits";

type Props = React.HTMLProps<HTMLDivElement>;

function Category(props: Props): JSX.Element {
  const { className } = props;
  let { category } = useParams();

  const { icons, title } = useMemo(() => {
    const c = fruits.find((x) => x.slug === category);
    const fruitIcons = c?.fruits.map((x) => x.icon);
    return { icons: fruitIcons, title: c?.name };
  }, [category]);

  return (
    <div className={`category ${className || ""}`}>
      <LdTypo variant="h1">{title}</LdTypo>
      <div style={{ fontSize: "10rem" }}>
        <ul className="flex">
          {icons?.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
