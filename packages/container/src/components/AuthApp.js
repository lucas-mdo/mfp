import { mountApp } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const el = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mountApp(el.current, {
      onNavigate: (path) => {
        const { pathname: currentPath } = history.location;
        if (currentPath !== path) {
          history.push(path);
        }
      },
    });

    history.listen((location) => {
      onParentNavigate(location.pathname);
    });
  }, []);

  return <div ref={el} />;
};
