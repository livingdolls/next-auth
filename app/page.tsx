import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return <div className="h-screen w-screen bg-red-500">Hello</div>;
}
