"use client";


import React, { ChangeEventHandler, useState } from "react"; 


interface View {
	title: string;
	url: string;
	img: string;
}


export default function AddRemove() {
	const [views, setViews] = useState([]);
	const [title, setTitle] = useState('');
	const [img, setImg] = useState('');
	const [url, setUrl] = useState('');
	const [title_r, setTitle_r] = useState('');


	const handleSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (typeof e === null) {
			return;
		}
		setTitle(e.target.value);
	}


	const handleSetURL = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (typeof e === null) {
			return;
		}
		setImg(e.target.value);
	}


	const handleSetImg = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (typeof e === null) {
			return;
		}
		setUrl(e.target.value);
	}


	const handleSetTitle_r = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (typeof e === null) {
			return;
		}
		setTitle_r(e.target.value);
	}


	const handleAdd = () => {
		console.log('Adding');

		let items: string | null = localStorage.getItem('view');
		let item: string;
		console.log(typeof items);
		if (typeof items === null) {
			item = '[]';
		} else {
			item = String(items);
		}

		let objs = JSON.parse(item);
		objs.push({
			'title': title,
			'url': url,
			'img': img
		})

		localStorage.setItem('view', JSON.stringify(objs));
	}


	const handleRemove = () => {
		console.log('Removing');

		let items: string | null = localStorage.getItem('view');
		let item: string;
		console.log(typeof items);
		if (typeof items === null) {
			item = '[]';
		} else {
			item = String(items);
		}

		let objs = JSON.parse(item);

		objs = objs.filter((obj: View) => {
			return obj['title'] != title_r
		})

		localStorage.setItem('view', JSON.stringify(objs));
	}


	const handleGet = () => {
		console.log('Getting');

		let items: string | null = localStorage.getItem('view');
		let item: string;
		console.log(typeof items);
		if (typeof items === null) {
			item = '[]';
		} else {
			item = String(items);
		}

		let objs = JSON.parse(item);
		console.log(objs);
	}


	return (
		<main className = "flex flex-col">
			<button onClick = { () => handleGet }>Get All</button>

			<section> 
				<span>Add link</span>
				<form>
					<label>Title: </label>
					<input name = 'title' value = {title} onChange = { (e) => handleSetTitle(e) } />
					<label>URL: </label>
					<input name = 'url' value = {url} onChange = { (e) => { handleSetURL(e) } } />
					<label>Image URL: </label>
					<input name = 'img' value = {img} onChange = { (e) => { handleSetImg(e) } } />
					<button onClick = { () => handleAdd }>Add</button>
				</form>
			</section>

			<section> 
				<span>Remove link</span>
				<form>
					<label>Title: </label>
					<input name = 'title_r' value = {title_r} onChange = { (e) => { handleSetTitle_r(e) } } />
					<button onClick = { () => handleRemove }>Remove</button>
				</form>
			</section>
			{ views }
		</main>
	)
}
