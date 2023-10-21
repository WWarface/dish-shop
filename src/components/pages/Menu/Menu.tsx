import { useQuery } from 'react-query'
import cl from './Menu.module.css'
import ProductCard from './ProductCard/ProductCard'
import { fetchAllDishes } from '../../../services/Products'
import Sidebar from './Sidebar/Sidebar'
import TestLoader from '../../../assets/loaders/testLoader/TestLoader'

function Menu() {
	const { data, isLoading } = useQuery('products', fetchAllDishes)

	if (isLoading) {
		return (
			<div
				style={{
					margin: '100px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<TestLoader />
			</div>
		)
	}

	return (
		<div className={cl.wrapper}>
			<Sidebar />
			<div className={cl.productsWrapper}>
				{data?.map(product => (
					<ProductCard {...product} />
				))}
				{data?.map(product => (
					<ProductCard {...product} />
				))}
				{data?.map(product => (
					<ProductCard {...product} />
				))}
			</div>
		</div>
	)
}

export default Menu
