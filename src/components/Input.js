const isFalse = (value) => value === 'false';

class Input extends React.Component {
  render() {
    const opts = { ...this.props };
    if (isFalse(opts.required)) {
        delete opts.required;
    }
    return <input className="login-form__input" {...opts} />;
  }
}

export default Input;
