const LastNameTextField = ({
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
          name="lastName"
          className="form-control text-left"
          required=""
        />
        <p className={`${styleTextError} text-left`}>{touched && error && <span>{error}</span>}</p>
      </div>
    );
  };
  
export default LastNameTextField;