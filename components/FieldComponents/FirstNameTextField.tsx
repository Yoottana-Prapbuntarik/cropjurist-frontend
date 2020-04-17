const FirstNameTextField = ({
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
          name="firstname"
          className="form-control"
          required=""
        />
        <p className={styleTextError}>{touched && error && <span>{error}</span>}</p>
      </div>
    );
  };
  
export default FirstNameTextField;
  