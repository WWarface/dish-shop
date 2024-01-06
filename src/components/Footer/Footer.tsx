import React, { FC, useState } from 'react'
import cl from './Footer.module.css'
import instagramIcon from './../../assets/icons/instagram.svg'
import facebookIcon from './../../assets/icons/facebook.svg'
import IconElement from './IconElement/IconElement'

const Footer: FC = () => {
	return (
		<div className={cl.wrapper}>
			<div className={cl.footerHeader}>
				<div className={cl.logoWrapper}>
					<span className={cl.logoText}>Kulinarna fantazja</span>
				</div>
			</div>
			<div className={cl.footerContent}>
				<div className={cl.descriptionWrapper}>
					<div className={cl.descriptionCombiner}>
						<div className={cl.descriptionItem}>
							<span className={cl.descriptionItemText}>
								Thank you for choosing our store!
							</span>
							<br />
							<br />
							<span className={cl.descriptionItemText}>
								We offer a wide range of fresh and tasty convenience foods that
								will help you prepare delicious meals for the whole family
								quickly and easily.
							</span>
						</div>
						<div className={cl.divider}></div>
						<div className={cl.descriptionItem}>
							<span className={cl.descriptionItemText}>
								Our products are made from quality ingredients and meet all
								quality standards.
							</span>
							<br />
							<br />
							<span className={cl.descriptionItemText}>
								We guarantee that you will be satisfied with our products.
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className={cl.contactWrapper}>
				<div className={cl.iconsWrapper}>
					<IconElement
						icon={instagramIcon}
						text={''}
						url={'https://www.instagram.com/?hl=ru'}
					/>
					<IconElement
						icon={facebookIcon}
						text={''}
						url={'https://www.facebook.com/'}
					/>
				</div>
			</div>
			<div className={cl.footerEnding}>
				<span className={cl.endingText}>
					Order now and enjoy delicious meals!
				</span>
			</div>
		</div>
	)
}

export default Footer
