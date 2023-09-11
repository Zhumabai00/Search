import React from 'react'
import { Link } from 'react-router-dom'
export const Home = ({ filterUsers }) => {
	return (
		<div>
			<div className="link">

			</div>
			<div className="users">
				{
					filterUsers.map((item) => {
						return (
							<div className='cardMin cardMin2' key={item.id} style={{ backgroundImage: `url(${item.images})` }}>
								<Link to={`/${item.id}`} className='cardHover'>
									<div>
										<h1 key={item.id}>{item.title}</h1>
									</div>
								</Link>

							</div>
						)
					})
				}
			</div>
		</div>
	)
}
