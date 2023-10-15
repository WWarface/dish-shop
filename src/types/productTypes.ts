export interface IProduct {
	_id: string
	name: string
	price: number
	description: string
	picture: { data: { data: Buffer }; imageType: string }
	isAddedToCart?: boolean
}
