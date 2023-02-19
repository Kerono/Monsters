import './App.css';
import CardList from "./components/Card-list"
import SearchBox from "./components/Search-box"
import { useState, useEffect } from 'react';
let App = () =>  {
	const [searchField, setSearchField] = useState("");
	const [monsters, setMonsters] = useState([]);
	useEffect(()=> {
		fetch("https://jsonplaceholder.typicode.com/users")
 			.then(responce => responce.json())
 			.then(users=> setMonsters(users))
	}, [])
	function onSearchChange(event){
		const searchFieldString = event.target.value.toLowerCase();
		setSearchField(searchFieldString)
	}
	let filterMontsers = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));
	return (
		<div className="App">
			<h1 className='app-title'>Monsters Rolodex</h1>
			<SearchBox 
				onChangeHandler = {onSearchChange}
				placeholder = 'search monsters' 
				className= "monsters-search-box"/>
			<CardList monsters={filterMontsers} />
    </div>
	)
}
export default App;
