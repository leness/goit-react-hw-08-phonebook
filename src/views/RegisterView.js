import { authOperations } from '../redux/auth';
import { Component } from "react";
import { connect } from "react-redux";
import s from './view.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1 className={s.title}>Страница регистрации</h1>

        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
           className={s.form_view}
        >
          <label style={styles.label}>
            Имя
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={this.handleChange}
            />
          </label>

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

          <button type="submit" className={s.button}>Зареєструватися</button>
          
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

// const mapDispatchToProps = dispatch => ({
//   onRegister: (data)=>dispatch(authOperations.register(data)) 
// });

export default connect(null, mapDispatchToProps)(RegisterView);