const ButtonSubmit = ({ input, label, type , style }: any) => {
    return (
      <input
        {...input}
        className={style}
        type={type}
        name="subscribe"
        value={label}
      />
    );
  };
  export default ButtonSubmit;