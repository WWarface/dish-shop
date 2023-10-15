import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../types/productTypes'

type ProductState = {
	products: IProduct[]
	inCartProducts: IProduct[]
}

const initialState: ProductState = {
	products: [],
	inCartProducts: []
}

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProduct(state, action: PayloadAction<IProduct>) {
			state.products.push({
				_id: action.payload._id,
				name: action.payload.name,
				price: action.payload.price,
				description: action.payload.description,
				picture: action.payload.picture
			})
		},
		setProducts(state, action: PayloadAction<Array<IProduct>>) {
			state.products = action.payload
		},
		addToCart(state, action: PayloadAction<IProduct>) {
			const existingProduct = state.inCartProducts.find(
				prod => prod._id === action.payload._id
			)

			if (!existingProduct) {
				state.inCartProducts.push({
					_id: action.payload._id,
					name: action.payload.name,
					price: action.payload.price,
					description: action.payload.description,
					picture: action.payload.picture,
					isAddedToCart: true
				})
			}
		},
		removeFromCart(state, action: PayloadAction<IProduct>) {
			state.inCartProducts.splice(
				state.inCartProducts.findIndex(prod => prod._id === action.payload._id),
				1
			)
		}
	}
})

export const { addProduct, addToCart, removeFromCart } = productSlice.actions
export default productSlice.reducer
