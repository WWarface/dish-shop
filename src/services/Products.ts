import axios from 'axios'
import { IProduct } from '../types/productTypes'

const instance = axios.create({
	baseURL: 'https://dishshop.adaptable.app/',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json'
	}
})

export async function fetchAllDishes(): Promise<IProduct[]> {
	const response = await instance.get<Array<IProduct>>('dish')
	return response.data
}
export async function fetchDishById(
	dishId: string | undefined
): Promise<IProduct> {
	const response = await instance.get<IProduct>('dish/' + dishId)
	return response.data
}
