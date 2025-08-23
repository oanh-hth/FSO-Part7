const LoginForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        <label htmlFor="username">username</label>
        <input
          id="username"
          data-testid="username"
          type="text"
          value={props.username}
          onChange={props.handleChangeUsername}
        ></input>
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          id="password"
          data-testid="password"
          type="password"
          value={props.password}
          onChange={props.handleChangePassword}
        ></input>
      </div>
      <button>login</button>
    </form>
  );
};

export default LoginForm;
