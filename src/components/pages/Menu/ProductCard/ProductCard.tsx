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
import { Link } from 'react-router-dom'

type ProductCardProps = IProduct

const ProductCard: FC<ProductCardProps> = product => {
	const dispatch = useAppDispatch()
	const ifAddedProduct = useAppSelector(state => {
		return state.products.inCartProducts.some(
			target => target._id === product._id
		)
	})
	console.log(ifAddedProduct)

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
				<Link to={'/menu/' + product._id}>
					<div className={cl.ImageBox}>
						<Base64Img picture={product.picture} className={cl.dishImage} />
					</div>
				</Link>
				<div className={cl.actionsWrapper}>
					<div className={cl.actionsBlock}>
						<ShoppingCartOutlined
							style={{ fontSize: '40px' }}
							className={
								ifAddedProduct ? cl.shoppingCartAddedToCart : cl.shoppingCart
							}
							onClick={onCartIconClick}
						/>
						<Link to={'/menu/' + product._id}>
							<EllipsisOutlined
								style={{ fontSize: '40px' }}
								className={cl.ellipsis}
							/>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductCard
