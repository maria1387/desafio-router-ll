const Btn = ({text, onClick, className}) => {
	return (
		<button onClick={onClick} className={className}>
			{text.toUpperCase()}
		</button>
	)
};

export default Btn;
