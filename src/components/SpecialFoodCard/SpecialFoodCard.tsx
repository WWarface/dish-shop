import React, {FC} from 'react';
import cl from './SpecialFoodCard.module.css'
import {Link} from "react-router-dom";

interface SpecialFoodCardProps{
    title:string;
    slogan:string;
    buttonValue:string;
    specialImage: string;
    secondaryImage: string;
    text:string;
}

const SpecialFoodCard:FC<SpecialFoodCardProps> = ({title,slogan,buttonValue,specialImage, secondaryImage, text}) => {
    return (
        <div className={cl.card}>
            <div className={cl.card__imageWrapper}>
                <div className={cl.card__imageContainer}>
                    <span className={cl.card__specialText}>Today's Special</span>
                    <img className={cl.card__mainImg} src={require(`../../assets/images/${specialImage}`)} alt=""/>
                    <div className={cl.card__secondImageWrapper}>
                        <div className={cl.card__secondImgContainer}>
                            <img className={cl.card__secondImg} src={require(`../../assets/images/${secondaryImage}`)} alt=""/>
                        </div>
                        <div className={cl.card__secondImageDashedBorder}></div>
                    </div>
                </div>
                <div className={cl.card__dashedBorder}></div>
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