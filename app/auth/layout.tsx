const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-screen h-screen flex flex-col justify-center">
			<div className="w-2/3 h-3/5 mx-auto bg-moon-100 shadow-2xl rounded-lg flex">
				<div className="w-3/5 flex flex-col justify-center">
					<img
						src="https://www.freepnglogos.com/uploads/key-png/key-icon-housing-and-residential-life-28.png"
						width="400"
						alt="key icon housing and residential life"
						className="mx-auto"
					/>
				</div>
				<div className="w-2/5 bg-moon-900">{children}</div>
			</div>
		</div>
	);
};

export default layout;
