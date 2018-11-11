import Input from './Input.js';
import Button from './Button.js';

class AuthForm extends React.Component {
  render() {
    return (
      <form className="login-page__form login-form" method="POST">
        <div className="login-form__title">Log in</div>
        <Input name="email" type="email" placeholder="E-Mail" required="true"/>
        <Input name="password" type="password" placeholder="Password" required="true"/>
        <Button text="Login"/>
      </form>
    );
  }
}

export default AuthForm;
