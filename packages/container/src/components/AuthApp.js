import { mountApp } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const el = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mountApp(el.current, {
      initialPath: history.location.pathname,
      onNavigate: (path) => {
        const { pathname: currentPath } = history.location;
        if (currentPath !== path) {
          history.push(path);
        }
      },
      onSignIn,
    });

    history.listen((location) => {
      onParentNavigate(location.pathname);
    });
  }, []);

  return <div ref={el} />;
};
