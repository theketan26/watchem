import { useState } from "react"


export default function add_remove() {
	const [views, setViews] = useState([]);
	const [title, setTitle] = useState('');
	const [img, setImg] = useState('');
	const [url, setUrl] = useState('');
	const [title_r, setTitle_r] = useState('');


	const handleAdd = (e) => {
		e.preventDefault();
		console.log('Adding');
		let obj = JSON.parse(localStorage.getItem('view'));
		obj.push({
			'title': title,
			'url': url,
			'img': img
		})
		localStorage.setItem('view', JSON.stringify(obj));
	}


	const handleRemove = (e) => {
		e.preventDefault();
		console.log('Removing');
		let objs = JSON.parse(localStorage.getItem('view'));
		objs = objs.filter((obj) => {
			return obj['title'] != title_r
		})
		localStorage.setItem('view', JSON.stringify(objs));
	}


	return (
		<main className = "flex flex-col">
			<button onClick = { () => console.log(JSON.parse(localStorage.getItem('view'))) }>Get All</button>

			<section> 
				<span>Add link</span>
				<form>
					<label name = 'title'>Title: </label>
					<input name = 'title' value = {title} onChange = { (e) => { setTitle(e.target.value) } } />
					<label name = 'url'>URL: </label>
					<input name = 'url' value = {url} onChange = { (e) => { setUrl(e.target.value) } } />
					<label name = 'img'>Image URL: </label>
					<input name = 'img' value = {img} onChange = { (e) => { setImg(e.target.value) } } />
					<button onClick = { handleAdd }>Add</button>
				</form>
			</section>

			<section> 
				<span>Remove link</span>
				<form>
					<label name = 'title_r'>Title: </label>
					<input name = 'title_r' value = {title_r} onChange = { (e) => { setTitle_r(e.target.value) } } />
					<button onClick = { handleRemove }>Remove</button>
				</form>
			</section>
			{ views }
		</main>
	)
}
