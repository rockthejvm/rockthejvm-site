import { h } from "preact";

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return <small>Copyright &copy; {currentYear}</small>;
};

export default Copyright;
