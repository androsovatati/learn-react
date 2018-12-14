import login from './services/login.js';

const Input = (props) => <input className="login-form__input" {...props} />;

const Button = (props) => (
    <button className="login-form__button" onClick={props.onClick}>
        {props.children}
    </button>
);

const LoginPage = (props) => (
    <main className="login-page">
        <div className="login-page__logo">
            <img className="company-logo" src="src/assets/images/w-mercury-development.svg" alt="logo" />
        </div>
        {props.children}
    </main>
);

const ErrorNotification = (props) => {
    if (!props.errorMessage) {
        return null;
    }
    return <div className="login-form__error">{props.errorMessage}</div>;
};

const FormLoader = ({ isLoading }) => {
    if (!isLoading) {
        return null;
    }
    return (
        <div className="login-form__loader">
            <div className="loader" />
        </div>
    );
};

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

    onLoginClick = async (e) => {
        if (!this.state.email || !this.state.password) {
            return;
        }
        e.preventDefault();
        try {
            this.setLoading();
            const response = await login(this.state);
            this.props.onSuccess(response);
        } catch (e) {
            this.resetPassword();
            this.resetLoading();
            this.setError(e);
        }
    };

    render() {
        return (
            <form className="login-page__form login-form">
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
                <Button className="login-form__button" onClick={this.onLoginClick}>
                    Login
                </Button>
                <FormLoader isLoading={this.state.isLoading} />
            </form>
        );
    }
}

const LogoutForm = ({ data, onLogout }) => (
    <div className="login-page__form logout-form">
        <img className="logout-form__avatar" src={data.photoUrl} alt="avatar" />
        <div className="logout-form__username">{data.name}</div>
        <Button className="logout-form__button" onClick={onLogout}>
            Logout
        </Button>
    </div>
);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: null };
    }

    onSuccessLogin = (data) => {
        this.setState({
            user: { ...data },
        });
    };

    onLogout = () => {
        this.setState({ user: null });
    };

    render() {
        const form = this.state.user ? (
            <LogoutForm data={this.state.user} onLogout={this.onLogout} />
        ) : (
            <LoginForm onSuccess={this.onSuccessLogin} />
        );

        return <LoginPage>{form}</LoginPage>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
