import React, {FC} from 'react';
import cl from './FoodCard.module.css'
import {Link} from "react-router-dom";
import DumplingsImg from '../../assets/images/pelmeni.png'
import classNames from "classnames";

export enum Directions{
    REVERSE='reverse',
    ROW='row'
}

interface FoodCardProps{
    direction?:Directions
}
const FoodCard:FC<FoodCardProps> = ({direction=Directions.ROW}) => {
    const cardClasses = classNames(cl.card,{
        [cl.reverse]:direction === Directions.REVERSE,
    })
    return (
        <div className={cardClasses}>
            <div className={cl.card__info}>
                <p className={cl.card__title}>Food Website</p>
                <p className={cl.card__slogan}>Food The Most Precious Thing</p>
                <div className={cl.link__wrapper}><Link className={cl.card__link} to={'main'}><button className={cl.card__button}>Today's Menu</button></Link></div>
            </div>
            <div className={cl.card__image}><img src={DumplingsImg} alt="DumplingsImg"/></div>
        </div>
    );
};

export default FoodCard;