import Button from './Button.js';

const LogoutForm = ({ data, onLogout }) => (
  <div className="login-page__form logout-form">
      <img className="logout-form__avatar" src={data.photoUrl} alt="avatar" />
      <div className="logout-form__username">{data.name}</div>
      <Button className="logout-form__button" onClick={onLogout}>
          Logout
      </Button>
  </div>
);

export default LogoutForm;