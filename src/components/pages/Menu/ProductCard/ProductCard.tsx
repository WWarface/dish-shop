import { useState, FC } from 'react'
import cl from './ProductCard.module.css'

const ProductCard: FC = () => {
	const [loading, setLoading] = useState(false)

	const onChange = (checked: boolean) => {
		setLoading(!checked)
	}

	return (
		<>
			<div className={cl.cardWrapper}>
				<div className={cl.ImageBox}>
					<img
						src='https://www.safefood.net/getmedia/d81f679f-a5bc-4a16-a592-248d3b1dc803/burger_1.jpg?width=1280&height=720&ext=.jpg'
						alt='dish-img'
						className={cl.dishImage}
					/>
				</div>
			</div>
		</>
	)
}

export default ProductCard
