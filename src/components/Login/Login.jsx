const Login = () => (
    <div >
        <h1 >Страница логина</h1>

        <form
          onSubmit={this.handleSubmit}
          
          autoComplete="off"
          // className={s.form_view}
        >
          <label >
            E-mail
            <input
              type="email"
              name="email"
              required
            //   value={email}
              onChange={this.handleChange}
            />
          </label>

          <label >
            Пароль
            <input
              type="password"
              name="password"
              required
            //   value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" >Войти</button>
        </form>
      </div>
)

export default Login