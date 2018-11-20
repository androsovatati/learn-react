const login = async ({ email, password }) => {
    const url = 'https://us-central1-mercdev-academy.cloudfunctions.net/login';
    const requestParams = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ email, password }),
    };

    const response = await fetch(url, requestParams).catch((error) =>
        Promise.reject({
            message: 'Network error',
            body: error,
        })
    );

    try {
        const parsedData = await response.json();
        if (response.ok) {
            return parsedData;
        }

        if (parsedData && parsedData.error) {
            return Promise.reject({
                message: parsedData.error,
                status: response.status,
                body: parsedData,
            });
        }

        let errorMessage = '';
        if (response.status >= 500) {
            errorMessage = 'Server error. Try again';
        } else if (response.status >= 400 && response.status < 500) {
            errorMessage = 'Application error';
        }

        return Promise.reject({
            message: errorMessage || 'Unhandled error',
            status: response.status,
            body: parsedData,
        });
    } catch (error) {
        return Promise.reject({
            message: 'Invalid server data',
            status: response.status,
            body: error,
        });
    }
};

const Input = (props) => (
    <input className="login-form__input" {...props}/>
);

const Button = (props) => (
    <button className="login-form__button" onClick={props.onClick}>
        {props.children}
    </button>
);

const LoginPage = (props) => (
    <main className="login-page">
        <div className="login-page__logo">
            <img className="company-logo" src="images/w-mercury-development.svg" alt="logo" />
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
        this.setState({
            isLoading: true,
        });
    }

    resetLoading() {
        this.setState({
            isLoading: false,
        });
    }

    resetPassword() {
        this.setState({
            password: '',
        });
    }

    onEmailChange = (e) => {
        this.props.resetError();
        this.setState({
            email: e.target.value,
        });
    };

    onPasswordChange = (e) => {
        this.props.resetError();
        this.setState({
            password: e.target.value,
        });
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
            this.props.onError(e);
        } finally {
            this.resetLoading();
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
                <ErrorNotification errorMessage={this.props.errorMessage} />
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

    onErrorLogin = (error) => {
        this.setState({
            errorMessage: error.message,
        });
    };

    resetError = () => {
        this.setState({
            errorMessage: '',
        });
    };

    onLogout = () => {
        this.setState({
            user: null,
        });
    };

    render() {
        const form = this.state.user ? (
            <LogoutForm data={this.state.user} onLogout={this.onLogout} />
        ) : (
            <LoginForm
                errorMessage={this.state.errorMessage}
                onSuccess={this.onSuccessLogin}
                onError={this.onErrorLogin}
                resetError={this.resetError}
            />
        );

        return <LoginPage>{form}</LoginPage>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
