import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "LYRIC:IT",
	description: "Play lyric-based games with your friends!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
