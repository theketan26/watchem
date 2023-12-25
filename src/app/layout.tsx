import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
	title: 'Watchem',
	description: 'Create a custom grid for all your favorite movies and series link.',
}


export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
    return (
		<html lang="en">
			<body className="bg-gradient-to-b from-gray-700 via-gray-900 to-black h-screen text-stone-200">{children}</body>
		</html>
    )
}
