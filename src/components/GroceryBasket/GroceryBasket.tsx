import React, {FC} from 'react';
import cl from './GroceryBasket.module.css'
import { Button } from 'antd';
import {CloseOutlined} from "@ant-design/icons";
interface GroceryBasket{
    visible:boolean;
    setVisible: (value:boolean)=>void;
    children?:React.ReactNode;
}

const GroceryBasket:FC<GroceryBasket> = ({visible, setVisible}) => {

    const wrapperClickHandler=(e:React.MouseEvent<HTMLDivElement>)=>{
        e.preventDefault();
        setVisible(false);
    }

    return (
        <>
            {visible &&
        <div className={cl.wrapper} onClick={wrapperClickHandler}>
            <div className={cl.container} onClick={(e:React.MouseEvent<HTMLDivElement>)=>e.stopPropagation()}>
                <div className={cl.basket}>
                    <Button onClick={()=>setVisible(false)} className={cl.basket__exit} icon={<CloseOutlined />} type="primary" danger></Button>
                    <h2 className={cl.basket__title}>Your products</h2>
                </div>
            </div>
        </div>
            }
            <div className={cl.basketImage}>
                <img onClick={()=>setVisible(true)} src={require('../../assets/images/basket.png')} alt="basket"/>
            </div>
        </>
    );
};

export default GroceryBasket;