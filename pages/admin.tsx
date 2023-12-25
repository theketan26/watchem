"use client";


import { useState } from "react"; 


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


	const handleAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		console.log('Adding');

		let items: string | null = localStorage.getItem('view');
		if (typeof items === null) {
			return;
		} else {
			items = '[]';
		}

		let obj: Array<View> = JSON.parse(items);
		obj.push({
			'title': title,
			'url': url,
			'img': img
		})

		localStorage.setItem('view', JSON.stringify(obj));
	}


	const handleRemove = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		console.log('Removing');

		let items: string | null = localStorage.getItem('view');
		if (typeof items === null) {
			return;
		} else {
			items = '[]';
		}

		let objs: Array<View>  = JSON.parse(items);
		objs = objs.filter((obj) => {
			return obj['title'] != title_r
		})

		localStorage.setItem('view', JSON.stringify(objs));
	}


	const handleGet = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		console.log('Getting');

		let items: string | null = localStorage.getItem('view');
		if (typeof items === null) {
			return;
		} else {
			items = '[]';
		}

		let objs: Array<View>  = JSON.parse(items);
		console.log(objs);
	}


	return (
		<main className = "flex flex-col">
			<button onClick = { () => handleGet }>Get All</button>

			<section> 
				<span>Add link</span>
				<form>
					<label>Title: </label>
					<input name = 'title' value = {title} onChange = { (e) => { setTitle(e.target.value) } } />
					<label>URL: </label>
					<input name = 'url' value = {url} onChange = { (e) => { setUrl(e.target.value) } } />
					<label>Image URL: </label>
					<input name = 'img' value = {img} onChange = { (e) => { setImg(e.target.value) } } />
					<button onClick = { () => handleAdd }>Add</button>
				</form>
			</section>

			<section> 
				<span>Remove link</span>
				<form>
					<label>Title: </label>
					<input name = 'title_r' value = {title_r} onChange = { (e) => { setTitle_r(e.target.value) } } />
					<button onClick = { () => handleRemove }>Remove</button>
				</form>
			</section>
			{ views }
		</main>
	)
}