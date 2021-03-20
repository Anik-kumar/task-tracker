import PropTypes from "prop-types";

const Button = ({color, text, onclick}) => {

  const onClickHandler = onclick;

  return (
    <button onClick={onClickHandler} style={{backgroundColor: color}} className="btn"> {text} </button>   
  )
}

Button.defaultProps = {
  color: "dimgray",
  text: "Add"
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Button;