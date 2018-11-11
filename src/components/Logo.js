import LogoImg from '@/assets/images/w-mercury-development.svg';

class Logo extends React.Component {
  render() {
    return (
      <div className="login-page__logo">
        <img
          className="company-logo"
          src={LogoImg}
          alt="logo"
        />
      </div>
    );
  }
}

export default Logo;
