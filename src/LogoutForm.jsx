import { UserContext } from './UserContext.js';
import Button from './Button.js';

const LogoutForm = () => (
  <UserContext.Consumer>
    {({ user, resetUser }) => (
      <div className="login-page__form logout-form">
        <img className="logout-form__avatar" src={user.photoUrl} alt="avatar" />
        <div className="logout-form__username">{user.name}</div>
        <Button className="logout-form__button" onClick={resetUser}>
          Logout
        </Button>
      </div>
    )}
  </UserContext.Consumer>
);

export default LogoutForm;