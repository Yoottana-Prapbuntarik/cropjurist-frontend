const PasswordTextField = ({
    input,
    label,
    type,
    styleTextError,
    meta: { touched, error },
  }: any) => {
    return (
      <div>
        <input
          {...input}
          placeholder={label}
          type={type}
          name="email"
          className="form-control"
        />
        <p className={styleTextError}>{touched && error && <span>{error}</span>}</p>
      </div>
    );
  };
  
  export default PasswordTextField;
  