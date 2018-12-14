import LoginPage from './LoginPage.js';
import LoginForm from './LoginForm.js';
import LogoutForm from './LogoutForm.js';

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
