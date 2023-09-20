import PropTypes from "prop-types";

const Link = ({ route }) => {
  const { path, name } = route;
  // console.log(route);
  return (
    <div>
      <li className="mr-10 px-6 hover:text-[#52b788] tracking-wide">
        <a href={path}>{name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
