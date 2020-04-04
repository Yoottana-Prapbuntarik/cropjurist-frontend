const EmailTextField = ({ input, label, type, meta: { touched, error } }: any) => {
  return (
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        name="email"
        className="email form-control email-subscribe-height"
        id="mc-email"
        required=""
      />
      <p className="text-white">{touched && error && <span>{error}</span>}</p>
    </div>
  );
};

export default EmailTextField;
