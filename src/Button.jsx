const Button = (props) => (
  <button className="login-form__button" onClick={props.onClick}>
      {props.children}
  </button>
);

export default Button;