import './styles/main.scss';
import './react.js';
import Logo from './components/Logo.js';
import AuthForm from './components/AuthForm.js';

ReactDOM.render(
  <div className="login-page">
    <Logo />
    <AuthForm />
  </div>,
  document.getElementById("root")
);