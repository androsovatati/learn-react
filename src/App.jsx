import { UserContext } from './UserContext.js';
import LoginPage from './LoginPage.js';
import LoginForm from './LoginForm.js';
import LogoutForm from './LogoutForm.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            setUser: this.setUser,
            resetUser: this.resetUser,
        };
    }

    setUser = (data) => {
        this.setState({
            user: { ...data },
        });
    };

    resetUser = () => {
        this.setState({ user: null });
    };

    render() {
        const form = this.state.user ? (
            <LogoutForm />
        ) : (
            <LoginForm />
        );

        return (
            <UserContext.Provider value={this.state}>
                <LoginPage>{form}</LoginPage>
            </UserContext.Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
