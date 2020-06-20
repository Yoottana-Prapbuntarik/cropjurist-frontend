const SelectField = ({
  input,
  disabledState,
  onChangeValue,
  name,
  label,
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
          disabled={disabledState}
          name={name}
          onChange={(e) => {
            const val = e.target.value
            input.onChange(val)
            onChangeValue(val)
          }}
        >
          {children}
        </select>
        <p className={`${styleTextError} text-left`}>{touched && error && <span>{error}</span>}</p>
      </div>
    </div>
  )
}

export default SelectField
