const ButtonSubmit = ({ input,  label, type, style }: any) => {
    return (
      <input
        {...input}
        className={style}
        type={type}
        name={label}
        value={label}
      />
    );
  };

export default ButtonSubmit;