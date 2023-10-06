import React, {FC} from 'react';
import cl from './FoodCard.module.css'
import {Link} from "react-router-dom";

interface FoodCardProps{
    title:string;
    slogan:string;
    buttonValue:string;
    image: string;
}
const FoodCard:FC<FoodCardProps> = ({title, slogan, image, buttonValue}) => {
    return (
        <div className={cl.card}>
            <div className={cl.card__info}>
                <p className={cl.card__title}>{title}</p>
                <p className={cl.card__slogan}>{slogan}</p>
                <div className={cl.link__wrapper}>
                    <Link className={cl.card__link} to={'main'}>
                        <button className={cl.card__button}>
                            {buttonValue}
                        </button>
                    </Link>
                </div>
            </div>
                <div className={cl.card__image}><img src={require(`../../assets/images/${image}`)} alt="DumplingsImg"/></div>
        </div>
    );
};

export default FoodCard;