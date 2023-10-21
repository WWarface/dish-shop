import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { reduxStore } from './redux/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/pages/Layout/Layout'
import Home from './components/pages/Home/Home'
import Menu from './components/pages/Menu/Menu'
import { QueryClient, QueryClientProvider } from 'react-query'
import Dish from './components/pages/Dish/Dish'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const client = new QueryClient()

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/menu',
				element: <Menu />
			},
			{
				path: '/menu/:userId?',
				element: <Dish />
			}
		]
	}
])

root.render(
	<QueryClientProvider client={client}>
		<Provider store={reduxStore}>
			<RouterProvider router={router} />
		</Provider>
	</QueryClientProvider>
)
