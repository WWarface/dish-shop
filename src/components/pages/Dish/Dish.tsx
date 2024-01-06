import { useParams } from 'react-router-dom'
import cl from './Dish.module.css'

import { UseQueryResult, useQuery } from 'react-query'

import { fetchDishById } from '../../../services/Products'
import { IProduct } from '../../../types/productTypes'

import TestLoader from '../../../assets/loaders/testLoader/TestLoader'
import base64ArrayBuffer from '../../../features/bufferConvertor'
import DishDescription from './DishDescription/DishDescription'

import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'

import rightArrow from '../../../assets/icons/right_arrow.svg'
import leftArrow from '../../../assets/icons/left_arrow.svg'

const Dish = () => {
	const { userId } = useParams()
	const { data, isLoading, isFetching }: UseQueryResult<IProduct, unknown> =
		useQuery({
			queryKey: ['product'],
			queryFn: () => fetchDishById(userId),
			enabled: true,
			refetchOnWindowFocus: false
		})

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
			<div className={cl.dishBlock}>
				<div className={cl.imageBox}>
					<img
						src={`data:${data?.picture?.imageType};base64, ${base64ArrayBuffer(
							data?.picture?.data.data
						)}`}
						alt='picture'
						className={cl.mainImg}
					/>
					<img
						src={rightArrow}
						alt='right arrow image'
						className={cl.rotateRightIcon}
					/>
					<img
						src={leftArrow}
						alt='left arrow image'
						className={cl.rotateLeftIcon}
					/>
				</div>
				<DishDescription data={data}></DishDescription>
			</div>
			<div className={cl.dishDividerWrapper}>
				<div className={cl.dividerPart}></div>
				<span className={cl.dividerText}>podobne produkty</span>
				<div className={cl.dividerPart}></div>
			</div>
			<div className={cl.dishOthersWrapper}></div>
		</div>
	)
}

export default Dish
