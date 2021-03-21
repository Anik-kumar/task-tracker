import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({title, onToggleForm, toggleBtnText}) => {

  return (
    <header className="header">
      <h2> {title} </h2>
      <Button color={toggleBtnText ? "#b7410e" : "#417DC1"} text={toggleBtnText ? 'CLOSE' : 'ADD'} onclick={onToggleForm} />
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