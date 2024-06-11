import { mountApp } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const el = useRef(null);

  useEffect(() => {
    mountApp(el.current);
  }, []);

  return <div ref={el} />;
};
