import React from 'react'
import Header from '../../Header/Header'
import './../../../assets/global.css'
import { Outlet } from 'react-router-dom'
import Footer from '../../Footer/Footer'

const Layout = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
