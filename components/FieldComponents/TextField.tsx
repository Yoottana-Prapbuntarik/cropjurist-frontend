const TextField = ({ input, label, type, className, styleTextError, name, meta: { touched, error } }: any) => {
	return (
		<div>
			<input {...input} placeholder={label} type={type} name={name} className={className} />
			<p className={`${styleTextError} text-left`}>{touched && error && <span>{error}</span>}</p>
		</div>
	);
};

export default TextField;
