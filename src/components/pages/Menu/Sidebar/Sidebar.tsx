import SidebarElement from './SidebarElement/SidebarElement'
import cl from './Sidebar.module.css'
import pelmeni from './../../../../assets/images/pelmeni.png'

const Sidebar = () => {
	return (
		<div className={cl.wrapper}>
			<div className={cl.sidebar}>
				<SidebarElement text={'Vareniky'} to={''} />
				<SidebarElement text={'Pirogy'} to={''} />
				<SidebarElement text={'Katlety'} to={''} />
				<SidebarElement text={'Golubci'} to={''} />
			</div>
			<img src={pelmeni} alt='No img' className={cl.boxImg} />
		</div>
	)
}

export default Sidebar
