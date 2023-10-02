import React from 'react'
import cl from './Footer.module.css'
import instagramIcon from './../../assets/icons/instagram.svg'
import facebookIcon from './../../assets/icons/facebook.svg'
import IconElement from './IconElement/IconElement'

function Footer() {
	return (
		<div className={cl.wrapper}>
			<div className={cl.footerContent}>
				<IconElement icon={instagramIcon} text={'Instagram'} />
				<IconElement icon={facebookIcon} text={'Facebook'} />
			</div>
		</div>
	)
}

export default Footer
