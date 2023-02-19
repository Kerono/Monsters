import "./card-list.css"
import Card from "./Card"

const CardList = (props) =>  {
		const {monsters} = props
		return (
			<div className="card-list">
				{monsters.map(monster => {
					return (
						<Card
							monster={monster}
							key={monster.id}
						/>
					);
				})} 
			</div>
		)
	}
export default CardList
