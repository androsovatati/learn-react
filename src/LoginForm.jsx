import withUserContext from './withUserContext.js';
import Input from './Input.js';
import Button from './Button.js';
import ErrorNotification from './ErrorNotification.js';
import FormLoader from './FormLoader.js';
import Login from './Login.js';

@withUserContext
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            email: '',
            password: '',
        };
    }

    setLoading() {
        this.setState({ isLoading: true });
    }

    resetLoading() {
        this.setState({ isLoading: false });
    }

    resetPassword() {
        this.setState({ password: '' });
    }

    onEmailChange = (e) => {
        this.resetError();
        this.setState({ email: e.target.value });
    };

    onPasswordChange = (e) => {
        this.resetError();
        this.setState({ password: e.target.value });
    };

    setError = ({ message }) => {
        this.setState({ errorMessage: message });
    };

    resetError = () => {
        this.setState({ errorMessage: '' });
    };

    onFormSubmit = async (e) => {
        if (!this.state.email || !this.state.password) {
            return;
        }
        e.preventDefault();
        try {
            this.setLoading();
            const response = await Login(this.state);
            this.props.context.setUser(response);
        } catch (e) {
            this.resetPassword();
            this.resetLoading();
            this.setError(e);
        }
    };

    render() {
        return (
            <form className="login-page__form login-form" onSubmit={this.onFormSubmit}>
                <div className="login-form__title">Log in</div>
                <Input
                    className="login-form__input"
                    name="email"
                    type="email"
                    placeholder="E-Mail"
                    required={true}
                    value={this.state.email}
                    onChange={this.onEmailChange}
                />
                <Input
                    className="login-form__input"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required={true}
                    value={this.state.password}
                    onChange={this.onPasswordChange}
                />
                <ErrorNotification errorMessage={this.state.errorMessage} />
                <Button className="login-form__button">
                    Login
                </Button>
                <FormLoader isLoading={this.state.isLoading} />
            </form>
        );
    }
}

export default LoginForm;
