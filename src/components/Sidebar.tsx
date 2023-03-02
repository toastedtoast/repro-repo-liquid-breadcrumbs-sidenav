import {
  LdSidenav,
  LdSidenavBack,
  LdSidenavHeader,
  LdSidenavHeading,
  LdSidenavNavitem,
  LdSidenavSlider,
  LdSidenavSubnav,
  LdSidenavToggleOutside,
} from "@emdgroup-liquid/liquid/dist/react";
import React, { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fruits } from "../data/fruits";

type Props = React.HTMLProps<HTMLDivElement>;

function Sidebar(props: Props) {
  const { className } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLink = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      const href = (e.target as HTMLLdSidenavNavitemElement).href;
      if (href) {
        navigate(href);
      }
    },
    [navigate]
  );

  const { selectedFruit, selectedCategory } = useMemo(() => {
    const pathItems = pathname.split("/").filter((x) => x);
    return {
      selectedCategory: pathItems[0],
      selectedFruit: pathItems[1],
    };
  }, [pathname]);

  return (
    <>
      <LdSidenavToggleOutside />
      <LdSidenav className={`${className || ""}`} collapsible collapsed narrow>
        <LdSidenavHeader href="/" slot="header">
          Fruits
        </LdSidenavHeader>
        <LdSidenavBack slot="top">
          <LdSidenavNavitem>All Fruits</LdSidenavNavitem>
        </LdSidenavBack>
        <LdSidenavSlider label="All Fruits">
          <LdSidenavHeading>Fruits by Category</LdSidenavHeading>
          {fruits.map((x) => (
            <LdSidenavNavitem
              key={x.slug}
              to={x.slug}
              selected={x.slug === selectedCategory}
            >
              {x.name}
            </LdSidenavNavitem>
          ))}
          {fruits.map((x) => (
            <LdSidenavSubnav key={x.slug} id={x.slug} label={x.name}>
              <LdSidenavHeading>{x.name}</LdSidenavHeading>
              {x.fruits.map((y) => (
                <LdSidenavNavitem
                  key={y.slug}
                  href={`/${x.slug}/${y.slug}`}
                  selected={y.slug === selectedFruit}
                  onClick={handleLink}
                >
                  {y.name}
                </LdSidenavNavitem>
              ))}
            </LdSidenavSubnav>
          ))}
        </LdSidenavSlider>
      </LdSidenav>
    </>
  );
}

export default Sidebar;
