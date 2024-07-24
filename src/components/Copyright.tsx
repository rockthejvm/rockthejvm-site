import site from "../data/site.json";

export default () => (
  <p>
    <small>
      &copy; 2019&ndash;{new Date().getFullYear()} {site.name}
    </small>
  </p>
);
