import { FC } from 'react'
import { Divider } from 'antd'
import { IProduct } from '../../../../types/productTypes'
import cl from './DishDescription.module.css'

interface DishDescription {
	data: IProduct | undefined
}

const DishDescription: FC<DishDescription> = ({ data }) => {
	return (
		<div className={cl.descriptionWrapper}>
			<span className={cl.descHeaderText}>{data?.name}</span>
			<Divider
				style={{
					backgroundColor: 'white',
					opacity: 0.3
				}}
			/>
			<span className={cl.descText}>{data?.description}</span>
			<Divider
				style={{
					backgroundColor: 'white',
					opacity: 0.3
				}}
			/>
			<span className={cl.descText}>{data?.price} UAH/100g</span>
			<Divider
				style={{
					backgroundColor: 'white',
					opacity: 0.3
				}}
			/>
			<span>Wartość odżywcza / Zawartość kalorii w 100 g produktu:</span>
			<br />
			<br />
			<span>
				Białko - 5,59 g; tłuszcz - 4,73 g; węglowodany - 34,68 g / 199,34 kcal.
			</span>
		</div>
	)
}

export default DishDescription
