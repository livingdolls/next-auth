import Link from "next/link";
import Input from "../../../components/Input";

const register = () => {
	return (
		<div className="h-full flex flex-col justify-center p-8">
			<form>
				<div className="mb-8">
					<Input
						id="nama"
						placeholder="Nama Anda"
						label="Nama"
						type="text"
					/>
				</div>

				<div className="mb-8">
					<Input
						id="email"
						placeholder="Email Anda"
						label="Email"
						type="email"
					/>
				</div>

				<div className="mb-8">
					<Input
						id="password"
						placeholder="password"
						label="Password"
						type="password"
					/>
				</div>

				<div className="mb-2">
					<button className="w-full rounded-lg bg-moon-500 hover:bg-moon-600 text-white font-bold p-3">
						REGISTER
					</button>
				</div>
				<div>
					<p className="text-white">
						Sudah punya akun ? login{" "}
						<Link
							href={"/auth"}
							className="font-semibold hover:bg-moon-500"
						>
							disini
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default register;
