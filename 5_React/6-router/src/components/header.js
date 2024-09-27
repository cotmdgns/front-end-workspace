import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/create"}>Create</Link>
        </li>
        <li>
          <Link to={"/detail/"}>Detail</Link>
        </li>
      </ul>
    </>
  );
};
export default Header;
