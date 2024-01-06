import { useQuery } from 'react-query'
import cl from './Menu.module.css'
import ProductCard from './ProductCard/ProductCard'
import { fetchAllDishes } from '../../../services/Products'
import Sidebar from './Sidebar/Sidebar'
import TestLoader from '../../../assets/loaders/testLoader/TestLoader'
import { Carousel } from 'antd'
import Base64Img from '../../Base64Img/Base64Img'
import { Link } from 'react-router-dom'

const contentStyle: React.CSSProperties = {
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79'
}

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
			<div className={cl.menuFront}>
				<Sidebar />
				<div className={cl.slider}>
					<Carousel
						autoplay
						dotPosition='bottom'
						dots={true}
						className={cl.carousel}
					>
						{data?.map(product => (
							<div className={cl.sliderElementBlock}>
								<Link to={'/menu/' + product._id}>
									<Base64Img
										picture={product.picture}
										className={cl.carouselImg}
									/>
								</Link>
							</div>
						))}
					</Carousel>
				</div>
			</div>
			<span className={cl.dishDescription}>All dishes</span>
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
