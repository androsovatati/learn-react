const LoginPage = props => (
  <main className="login-page">
    <div className="login-page__logo">
      <img
        className="company-logo"
        src="assets/images/w-mercury-development.svg"
        alt="logo"
      />
    </div>
    {props.children}
  </main>
);

export default LoginPage;
