const SelectField = ({
  input,
  disabledState,
  name,
  label,
  value,
  style,
  children,
  styleTextError,
  meta: { touched, error }
}: any) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <select
          className={style}
          {...input}
          value={value}
          name={name}
          disabled={disabledState}
        >
          {children}
        </select>
        <p className={`${styleTextError} text-left`}>{touched && error && <span>{error}</span>}</p>
      </div>
    </div>
  )
}

export default SelectField
