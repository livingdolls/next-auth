"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

const dashboard = () => {
	const { data: session } = useSession();
	const handleSignOut = () => {
		signOut({ callbackUrl: "http://localhost:3000/auth" });
	};

	if (!session) {
		return (
			<div>
				<p>Tidak boleh diakses</p>
			</div>
		);
	}

	return (
		<div>
			{session ? "ada" : "tidak ada"}
			<p>Hello {session?.user?.name}</p>

			<button
				className="p-2 bg-moon-500 px-3 text-white"
				onClick={handleSignOut}
			>
				SignOut
			</button>
		</div>
	);
};

export default dashboard;
