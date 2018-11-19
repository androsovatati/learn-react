const isFalse = (value) => value === 'false';

const Input = (props) => {
    const opts = { ...props };
    if (isFalse(opts.required)) {
        delete opts.required;
    }
    return <input className="login-form__input" {...opts} />;
};

const Button = (props) => (
    <button className="login-form__button">{props.children}</button>
);

const LoginPage = (props) => (
    <main className="login-page">
        <div className="login-page__logo">
            <img
                className="company-logo"
                src="images/w-mercury-development.svg"
                alt="logo"
            />
        </div>
        {props.children}
    </main>
);

const LoginForm = (props) => (
    <form className="login-page__form login-form">
        <div className="login-form__title">Log in</div>
        <Input
            className="login-form__input"
            name="email"
            type="email"
            placeholder="E-Mail"
            required={true}
        />
        <Input
            className="login-form__input"
            name="password"
            type="password"
            placeholder="Password"
            required={true}
        />
        <div className="login-form__error" />
        <Button className="login-form__button">Login</Button>
    </form>
);

const LogoutForm = (props) => (
    <form className="login-page__form logout-form">
        <img className="logout-form__avatar" src="" alt="avatar" />
        <div className="logout-form__username" />
        <Button className="logout-form__button">Logout</Button>
    </form>
);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: null };
    }

    get isLoggedIn() {
        return !!this.state.user;
    }

    render() {
        const form = this.isLoggedIn ? <LogoutForm /> : <LoginForm />;
        return <LoginPage>{form}</LoginPage>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
