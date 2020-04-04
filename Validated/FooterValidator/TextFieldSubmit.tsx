const EmailSubmit = ({ input, label, type }: any) => {
    return (
      <input
        {...input}
        className="btn btn-outline-light btn-block mt-3 mb-2"
        type={type}
        name="subscribe"
        value={label}
      />
    );
  };
  export default EmailSubmit;
  