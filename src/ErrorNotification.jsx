const ErrorNotification = props => {
  if (!props.errorMessage) {
    return null;
  }
  return <div className="login-form__error">{props.errorMessage}</div>;
};

export default ErrorNotification;
