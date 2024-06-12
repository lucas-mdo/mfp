import { mountApp } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const el = useRef(null);
  const history = useHistory();

  useEffect(() => {
    mountApp(el.current, {
      onNavigate: (path) => {
        console.log("Navigated to", path);
        const { pathname: currentPath } = history.location;
        if (currentPath !== path) {
          history.push(path);
        }
      },
    });
  }, []);

  return <div ref={el} />;
};
