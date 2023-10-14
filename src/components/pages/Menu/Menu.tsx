import { useQuery } from 'react-query'
import cl from './Menu.module.css'
import ProductCard from './ProductCard/ProductCard'
import { fetchAllDishes } from '../../../services/Products'
import Base64Img from "../../Base64Img/Base64Img";

function Menu() {
	const { data } = useQuery('products', fetchAllDishes)
	return (
		<div className={cl.wrapper}>
			<ProductCard />
			{data?.map(product => (
				<div key={product._id}>
					<h1 >{product.name}</h1>
					<Base64Img picture={product.picture}/>
					<br />
				</div>
			))}
		</div>
	)
}

export default Menu
