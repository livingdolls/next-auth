"use client";

import Link from "next/link";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<div className="flex space-x-3 p-5">
					<div className="p-2 bg-green-500 rounded-lg px-5 text-white font-bold">
						<Link href="/auth">Login</Link>
					</div>
					<div className="p-2 bg-green-500 rounded-lg px-5 text-white font-bold">
						<Link href="/">Home</Link>
					</div>
				</div>

				<SessionProvider>
					<div>{children}</div>
				</SessionProvider>
			</body>
		</html>
	);
}
