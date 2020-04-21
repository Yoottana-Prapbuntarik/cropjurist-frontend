const EmailTextField = ({
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
          name="confirmEmail"
          className="email form-control email-subscribe-height"
          required=""
        />
        <p className={styleTextError}>{touched && error && <span>{error}</span>}</p>
      </div>
    );
  };
  
export default EmailTextField;