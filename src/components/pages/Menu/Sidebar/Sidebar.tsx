import SidebarElement from './SidebarElement/SidebarElement'
import cl from './Sidebar.module.css'
import pelmeni from './../../../../assets/images/pelmeni.png'

const Sidebar = () => {
	return (
		<div className={cl.wrapper}>
			<div className={cl.header}>
				<span className={cl.headerText}>domowe dania gotowe</span>
			</div>
			<div className={cl.sidebar}>
				<SidebarElement text={'Vareniky'} to={''} />
				<SidebarElement text={'Pirogy'} to={''} />
				<SidebarElement text={'Katlety'} to={''} />
				<SidebarElement text={'Golubci'} to={''} />
			</div>
		</div>
	)
}

export default Sidebar
