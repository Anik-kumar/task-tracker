import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({title}) => {

  const onClickBtn = () => {
    console.log("click from header");
  }

  return (
    <header className="header">
      <h2> {title} </h2>
      <Button color="lightslategray" onclick={onClickBtn} />
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;