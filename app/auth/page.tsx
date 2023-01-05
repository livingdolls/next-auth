"use client";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

const Auth = () => {
	const { data: session } = useSession();
	console.log(session);

	const loginGoogle = () => {
		signIn("google", { callbackUrl: "http://localhost:3000/dashboard" });
	};

	return (
		<div className="h-full flex flex-col justify-center">
			<div className="w-full p-8 m-auto">
				<form>
					<div className="mb-8">
						<label
							htmlFor="email"
							className="block font-semibold mb-2 text-lg text-white dark:text-white"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							className="bg-transparent border-b border-b-gray-300 w-full placeholder-white p-3 focus:borde-500 focus:outline-none text-white text-md "
							placeholder="name@gmail.com"
							required
						/>
					</div>

					<div className="mb-8">
						<label
							htmlFor="email"
							className="block mb-2 text-lg font-semibold text-white dark:text-white"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							className="bg-transparent border-b border-b-gray-300 w-full placeholder-white p-3 focus:border-b-moon-500 focus:outline-none text-white text-md "
							placeholder="password"
							required
						/>
					</div>

					<div className="flex space-x-3">
						<button className="w-full rounded-lg bg-moon-500 ring-1 ring-moon-500 hover:bg-moon-600 text-white font-bold p-3">
							LOGIN
						</button>
					</div>
				</form>

				<button
					onClick={loginGoogle}
					className="w-full rounded-lg bg-moon-900 ring-1 ring-white hover:bg-moon-600 text-white font-bold p-3 "
				>
					<img
						alt="google"
						className="mx-auto"
						src={
							"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
						}
						width={25}
						height={25}
					/>
				</button>
				<div>
					<p className="mt-2 text-white">
						Belum memiliki akun? daftar{" "}
						<Link
							href="/auth/register"
							className="hover:bg-moon-500 font-bold"
						>
							disini
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Auth;
