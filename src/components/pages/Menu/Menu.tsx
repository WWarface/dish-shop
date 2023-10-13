import { useQuery } from 'react-query'
import cl from './Menu.module.css'
import ProductCard from './ProductCard/ProductCard'
import { fetchAllDishes } from '../../../services/Products'
import { IProduct } from '../../../types/productTypes'

function Menu() {
	const { data } = useQuery('products', fetchAllDishes)

	return (
		<div className={cl.wrapper}>
			<ProductCard />
			{data?.map(product => (
				<>
					<h1>{product.name}</h1>
					<br />
				</>
			))}
		</div>
	)
}

export default Menu
