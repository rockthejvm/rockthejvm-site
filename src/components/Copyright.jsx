import { h } from "preact";

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return <small>&copy; {currentYear} Rock the JVM. All rights reserved.</small>;
};

export default Copyright;
