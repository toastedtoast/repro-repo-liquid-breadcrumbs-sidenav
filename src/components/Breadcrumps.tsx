import {
  LdBreadcrumbs,
  LdCrumb,
  LdIcon,
} from "@emdgroup-liquid/liquid/dist/react";
import React, { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fruits } from "../data/fruits";

type Props = React.HTMLProps<HTMLDivElement>;

function Breadcrumps(props: Props) {
  const { className } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const crumps = useMemo(() => {
    const pathItems = pathname.split("/").filter((x) => x);
    const category = pathItems[0]
      ? fruits.find((x) => x.slug === pathItems[0])
      : undefined;
    const fruit =
      pathItems[1] && category
        ? category.fruits.find((x) => x.slug === pathItems[1])
        : undefined;

    return [
      { label: "Home", icon: "🌳", slug: "/" },
      ...(!!category
        ? [{ label: category.name, slug: `/${category.slug}` }]
        : []),
      ...(!!fruit
        ? [
            {
              label: fruit.name,
              icon: fruit.icon,
              slug: `/${category?.slug}/${fruit.slug}`,
            },
          ]
        : []),
    ];
  }, [pathname]);

  const handleLink = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      const href = (e.target as HTMLLdCrumbElement).href;
      if (href) {
        navigate(href);
      }
    },
    [navigate]
  );

  return (
    <LdBreadcrumbs className={`${className}`}>
      {crumps.map((x) => (
        <LdCrumb
          key={x.label}
          onClick={x.slug ? handleLink : undefined}
          href={x.slug}
        >
          {x.icon && <span>{x.icon}</span>}
          {x.label}
        </LdCrumb>
      ))}
    </LdBreadcrumbs>
  );
}

export default Breadcrumps;
