import { useParams } from 'react-router-dom'
import cl from './Dish.module.css'
import { UseQueryResult, useQuery } from 'react-query'
import { fetchDishById } from '../../../services/Products'
import { IProduct } from '../../../types/productTypes'
import Base64Img from '../../Base64Img/Base64Img'
import TestLoader from '../../../assets/loaders/testLoader/TestLoader'

const Dish = () => {
	const { userId } = useParams()
	const { data, isLoading, isFetching }: UseQueryResult<IProduct, unknown> =
		useQuery('product', () => fetchDishById(userId))

	if (isLoading || isFetching) {
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
			<div>Dish Page</div>
			<h1>Id: {userId}</h1>
			<p>{data?.name}</p>
			<Base64Img picture={data?.picture} className={cl.dishImage} />
		</div>
	)
}

export default Dish
