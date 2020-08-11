const CustomeTextField = ({ input, label, currentValue, type, className, styleTextError, name, meta: { touched, error } }: any) => {
  return (
    <div>
      <input {...input} placeholder={label} type={type} value={currentValue} name={name} className={className} />
      <p className={`${styleTextError} text-left`}>{touched && error && <span>{error}</span>}</p>
    </div>
  )
}

export default CustomeTextField
