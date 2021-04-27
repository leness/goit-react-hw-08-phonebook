import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  form: {
    width: 230,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

class LoginView extends Component{
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1 className="text-center">Введіть логін та пароль</h1>

        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            E-mail
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" class="btn btn-light">Увійти</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);

