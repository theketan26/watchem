"use client";


import View from "@/components/view";
import { useState, useEffect } from "react";
import path from "path";
// import fs from "fs";


import { Poppins } from "next/font/google";


const poppins = Poppins({
	subsets: ['latin'],
	// variable: '--font-inter',
	weight: '600'
})


interface View {
	title: string;
	url: string;
	img: string;
}


export default function Home() {
	const [views, setViews] = useState([]);
	// const [isEmpty, setIsEmpty] = useState(true);


	useEffect(() => {
		// let items: string | null = localStorage.getItem('view');
		// let item: string;
		// console.log(typeof items);

		// let objs = JSON.parse(item);
		// setViews(objs);


		// const filePath = path.join(process.cwd(), 'jsons/views.json');

		const objs = require('../../public/jsons/views.json');
		console.log(objs);

		setViews(objs);
	}, [])


	return (
		<main className = "flex flex-col">
			<div className = "mt-32 text-5xl self-center">
				<span className = { poppins.className }>Watcher</span>
			</div>

			<div className = "w-3/4 my-14 py-10 self-center flex justify-evenly flex-wrap">
				{/* {
					isEmpty && <span>No Data!</span>
				}
				{
					!isEmpty &&
					views.map((view: View) => <View 
						key = { 1 }
						title = { view.title }
						url = { view.url }
						img = { view.img }	
					/>)
				} */}
				{
					views.map((view: View) => <View 
						key = { 1 }
						title = { view.title }
						url = { view.url }
						img = { view.img }	
					/>)
				}
			</div>
		</main>
	)
}
