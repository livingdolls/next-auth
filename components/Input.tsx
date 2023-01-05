type inputProps = {
	type: string;
	id: string;
	placeholder: string;
	label: string;
};
const Input = ({ type, id, placeholder, label, ...action }: inputProps) => {
	return (
		<div>
			<label
				htmlFor={id}
				className="block font-semibold mb-2 text-lg text-white dark:text-white"
			>
				{label}
			</label>
			<input
				type={type}
				id={id}
				name={id}
				className="bg-transparent border-b border-b-gray-300 w-full placeholder-white p-3 focus:borde-500 focus:outline-none text-white text-md focus:transition focus:ease-in-out focus:-translate-y-1 focus:scale-105"
				placeholder={placeholder}
				required
				{...action}
			/>
		</div>
	);
};

export default Input;
