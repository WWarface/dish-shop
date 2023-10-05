import React from 'react'
import Header from '../../Header/Header'
import './../../../assets/global.css'
import Footer from '../../Footer/Footer'
import ContentLayout from "./ContentLayout/ContentLayout";

const Layout = () => {
	return (
		<div>
			<Header />
			<ContentLayout />
			<Footer />
		</div>
	)
}

export default Layout
