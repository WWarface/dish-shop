import React from 'react'
import cl from './IconElement.module.css'

interface IconElementProps {
	icon: string
	text: string
}

const IconElement: React.FC<IconElementProps> = ({ icon, text }) => {
	return (
		<div className={cl.iconElement}>
			<img src={icon} alt='Instagram img' className={cl.icons} />
			<p className={cl.iconText}>{text}</p>
		</div>
	)
}

export default IconElement
