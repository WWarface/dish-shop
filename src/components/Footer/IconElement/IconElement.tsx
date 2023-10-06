import React from 'react'
import cl from './IconElement.module.css'

interface IconElementProps {
	icon: string
	text: string
	url: string
}

const IconElement: React.FC<IconElementProps> = ({ icon, text, url }) => {
	return (
		<div className={cl.iconElement}>
			<a href={url}>
				<img src={icon} alt='Instagram img' className={cl.icons} />
				<p className={cl.iconText}>{text}</p>
			</a>
		</div>
	)
}

export default IconElement
