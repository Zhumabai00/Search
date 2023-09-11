import React, { useState, useEffect } from 'react'
import { Link, useParams, NavLink } from 'react-router-dom'

export const SingleCard = ({ filterUsers }) => {
	const { id } = useParams();
	const [card, setCard] = useState(null)
	useEffect(() => { /// activate when starting
		fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
			.then(res => res.json())
			.then(data => setCard(data))
	}, [id])

	return (
		<div className="SingleCard">
			<div className='SingleCard__body'>
				<div className="SingleCard__img">
					<div className="SingleCard__card">
						{card && (
							<>
								<img src={card.images} alt="img" />
							</>
						)}
					</div>
				</div>
				<div className="SingleCard__content">
					{card && (
						<div className="SingleCard__content-box">
							<h1 className='SingleCard__title'>{card.title}</h1>
							<p className='SingleCard__description'>{card.description}</p>
							<p className='SingleCard__price'>created at / <b> {card.creationAt}</b></p>
						</div>
					)}
					<div className="SingleCard__buttons">
						<button className=''>Add to card</button>
						<button>Add to favorite</button>
					</div>
				</div>
			</div>
			<h1 style={{ textAlign: `center`, margin: '50px 0' }}>Similar</h1>
			<div className="users">
				{
					filterUsers.map((item) => {
						return (
							<div className='cardMin cardMin2' key={item.id} style={{ backgroundImage: `url(${item.images})` }}>
								<NavLink to={`/${item.id}`} className='cardHover'>
									<div>
										<h1 key={item.id}>{item.title}</h1>
									</div>
								</NavLink>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}
