import { useQuery } from 'react-query'
import cl from './Menu.module.css'
import ProductCard from './ProductCard/ProductCard'
import { fetchAllDishes } from '../../../services/Products'

function Menu() {
	const { data } = useQuery('products', fetchAllDishes)
	return (
		<div className={cl.wrapper}>
			{data?.map(product => (
				<ProductCard {...product} />
			))}
		</div>
	)
}

export default Menu
