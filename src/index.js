import './react.js';

class HelloWorldClass extends React.Component {
  render() {
    return <div>Hello World, I'm a {this.props.name}</div>;
  }
}

function HelloWorldFunction(props) {
  return <div className="hello">Hello World, I'm a {props.name}</div>;
}

ReactDOM.render(
  <div>
    <HelloWorldFunction name="Awesome Function" />
    <HelloWorldClass name="Awesome Class" />
  </div>,
  document.getElementById("root")
);