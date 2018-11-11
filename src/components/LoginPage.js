import Logo from './Logo.js';
import AuthForm from './AuthForm.js';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
        <Logo />
        <AuthForm />
      </div>
    );
  }
}

export default LoginPage;
