import { useState, useEffect, FC } from 'react'
import cl from './ProductCard.module.css'
import { IProduct } from '../../../../types/productTypes'
import Base64Img from '../../../Base64Img/Base64Img'
import { ShoppingCartOutlined, EllipsisOutlined } from '@ant-design/icons'
import {
	addToCart,
	removeFromCart
} from '../../../../redux/slices/productSlice'
import { useAppDispatch, useAppSelector } from '../../../../hook'

type ProductCardProps = IProduct

const ProductCard: FC<ProductCardProps> = product => {
	const [loading, setLoading] = useState(false)
	// useEffect(() => {}, [product.isAddedToCart])
	const dispatch = useAppDispatch()
	const ifAddedProduct = useAppSelector(state => {
		return state.products.inCartProducts.some(
			target => target._id === product._id
		)
	})
	console.log(ifAddedProduct)

	const onChange = (checked: boolean) => {
		setLoading(!checked)
	}

	const onCartIconClick = () => {
		if (ifAddedProduct) {
			dispatch(removeFromCart(product))
		} else {
			dispatch(addToCart(product))
		}
	}
	return (
		<>
			<div className={cl.cardWrapper}>
				<div className={cl.ImageBox}>
					<Base64Img picture={product.picture} className={cl.dishImage} />
				</div>
				<div className={cl.actionsWrapper}>
					<div className={cl.actionsBlock}>
						<ShoppingCartOutlined
							style={{ fontSize: '40px' }}
							className={
								ifAddedProduct ? cl.shoppingCartAddedToCart : cl.shoppingCart
							}
							onClick={onCartIconClick}
						/>
						<EllipsisOutlined
							style={{ fontSize: '40px' }}
							className={cl.ellipsis}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductCard
