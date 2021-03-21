import PropTypes from "prop-types";

const Button = ({color, text, onclick}) => {

  return (
    <button onClick={onclick} style={{backgroundColor: color}} className="btn">{text}</button>   
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