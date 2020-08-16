const Textarea = ({ input, label, currentValue, type, className, styleTextError, name, meta: { touched, error } }: any) => {
  return (
    <div>
      <textarea rows="4" cols="50" {...input} placeholder={label} type={type} value={currentValue} name={name} className={className} />
      <p className={`${styleTextError} text-left`}>{touched && error && <span>{error}</span>}</p>
    </div>
  )
}

export default Textarea
