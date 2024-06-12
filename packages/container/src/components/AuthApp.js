import { mountApp } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const history = useHistory();
  const mountDivRef = useRef(null);
  const thisRef = useRef({ mountDiv: null });

  useEffect(() => {
    thisRef.current.mountDiv = mountDivRef.current;

    const { onParentNavigate } = mountApp(mountDivRef.current, {
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

    return () => {
      /* --- clear up --- */
      ReactDOM.unmountComponentAtNode(thisRef.current.mountDiv);
    };
  }, []);

  return <div ref={mountDivRef} />;
};
