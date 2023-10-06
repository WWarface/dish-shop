import React, {FC} from 'react';
import cl from './SpecialFoodCard.module.css'
import {Link} from "react-router-dom";

interface SpecialFoodCardProps{
    title:string;
    slogan:string;
    buttonValue:string;
    image: string;
    text:string;
}

const SpecialFoodCard:FC<SpecialFoodCardProps> = ({title,slogan,buttonValue,image, text}) => {
    return (
        <div className={cl.card}>
            <div className={cl.card__imageContainer}>

            </div>
            <div className={cl.card__info}>
                <p className={cl.card__title}>{title}</p>
                <p className={cl.card__slogan}>{slogan}</p>
                <p className={cl.card__text}>{text}</p>
                <div className={cl.link__wrapper}>
                    <Link className={cl.card__link} to={'main'}>
                        <button className={cl.card__button}>
                            {buttonValue}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SpecialFoodCard;