import React from 'react'
import { Link } from 'react-router-dom';

export const Header = ({ setValue }) => {
	return (
		<div>
			<div className="form">
				<button><Link to={"/"}>Главный</Link></button>
				<button>создать</button>
				<input
					type="text"
					placeholder='Search the users'
					className='item__input'
					onChange={(event) => {
						setTimeout(() => {
							setValue(event.target.value)
						}, 200);
					}} /// receive the contents from customers
				/>
				{/* <AiFillMessage/> */}
			</div>
		</div>
	)
}
