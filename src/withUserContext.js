import { UserContext } from "./UserContext.js";

function withUserContext(Component) {
  return class ComponentWithUserContext extends React.Component {
    render() {
      return (
        <UserContext.Consumer>
          {context => <Component {...this.props} context={context} />}
        </UserContext.Consumer>
      );
    }
  };
}

export default withUserContext;
