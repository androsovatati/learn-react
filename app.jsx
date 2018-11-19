const isFalse = (value) => value === 'false';

const Input = (props) => {
    const opts = { ...props };
    delete opts.onChange;
    if (isFalse(opts.required)) {
        delete opts.required;
    }
    return <input className="login-form__input" {...opts} onChange={props.onChange}/>;
};

const Button = (props) => (
    <button className="login-form__button" onClick={props.onClick}>
        {props.children}
    </button>
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

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
        };
    }

    onInputChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    }

    onEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    }

    login = () => {
        console.log('login', this.state);
    }

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
                    value={this.state.name}
                    onChange={this.onInputChange}
                />
                <Input
                    className="login-form__input"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required={true}
                    value={this.state.email}
                    onChange={this.onEmailChange}
                />
                <div className="login-form__error" />
                <Button className="login-form__button" onClick={this.login}>
                    Login
                </Button>
            </form>
        );
    }
}

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
