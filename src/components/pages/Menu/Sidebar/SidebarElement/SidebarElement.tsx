import { FC } from 'react'
import cl from './SidebarElement.module.css'

interface SidebarElementProps {
	text: string
	to: string
}

const SidebarElement: FC<SidebarElementProps> = ({ text, to }) => {
	return (
		<div className={cl.wrapper}>
			<div className={cl.text}>{text}</div>
			<div className={cl.divider}></div>
		</div>
	)
}

export default SidebarElement
