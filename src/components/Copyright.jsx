import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

const Copyright = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const style = {
    top: "100vh",
  };

  return (
    <small style={style}>
      Copyright &copy; {currentYear} | All rights reserved
    </small>
  );
};

export default Copyright;
