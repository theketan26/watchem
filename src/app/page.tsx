import View from "@/components/view"


import { Poppins } from "next/font/google";


const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-inter',
	weight: '600'
})


export default function Home() {
	return (
		<main className = "flex flex-col">
			<div className = "mt-32 text-5xl self-center">
				<span className = { poppins.className }>Watcher</span>
			</div>

			<div className = "w-3/4 my-14 py-10 self-center flex justify-evenly flex-wrap">
				<div className = "w-1/3 my-10 mx-10">
					<View 
						title = 'Friends'
						url = '#'
						img = 'images/friends.jpg'
					/>
				</div>
				<div className = "w-1/3 my-10 mx-10">
					<View 
						title = 'How I Met Your Mother?'
						url = '#'
						img = 'images/himym.jpg'
					/>
				</div>
			</div>
		</main>
	)
}
