import cl from './Admin.module.css'

const Admin = () => {
	return (
		<div className={cl.wrapper}>
			<div className={cl.content}>
				<form action='#'>
					<div className={cl.formElement}>
						<span>Title</span>
						<input type='input' name='' id='' className={cl.input} />
					</div>
					<div className={cl.formElement}>
						<span>Name</span>
						<input type='input' name='' id='' className={cl.input} />
					</div>
					<div className={cl.formElement}>
						<span>Price</span>
						<input type='input' name='' id='' className={cl.input} />
					</div>
					<div className={cl.formElement}>
						<span>Description</span>
						<input type='input' name='' id='' className={cl.input} />
					</div>
					<div className={cl.formElement}>
						<span>image</span>
						<input type='file' name='' id='' />
					</div>
					<div className={cl.formElement}>
						<div className={cl.buttonWrapper}>
							<button className={cl.saveButton}>Save</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Admin
