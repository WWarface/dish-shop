import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../types/productTypes'

type ProductState = {
	products: IProduct[]
}

const initialState: ProductState = {
	products: []
}

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProduct(state, action: PayloadAction<IProduct>) {
			state.products.push({
				id: action.payload.id,
				name: action.payload.name,
				price: action.payload.price,
				description: action.payload.description
			})
		},
		setProducts(state, action: PayloadAction<Array<IProduct>>) {
			state.products = action.payload
		}
	}
})

export const { addProduct } = productSlice.actions
export default productSlice.reducer
