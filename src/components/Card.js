import "./card.css"

const Card = (props) =>  {
		const {id, name, email} = props.monster
		return (
			<div className="card-container">
				<img 
					alt = {`monster ${name}`} 
					src={`https://robohash.org/${id}?set=set2&size=180x180`}
					className="card-container__img"
				/> 
				<h2>{name}</h2>
				<p className="card-container__email">{email}</p>
			</div> 
		)
	}
	
export default Card
