import React, {useState} from 'react';
import FoodCard from "../../FoodCard/FoodCard";
import SpecialFoodCard from "../../SpecialFoodCard/SpecialFoodCard";
import GroceryBasket from "../../GroceryBasket/GroceryBasket";

const Home = () => {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            <FoodCard
                title={'Food Website'}
                slogan={'Food The Most Precious Thing'}
                buttonValue={'Today\'s Menu'}
                image={'dumplings.png'}
            />
            <SpecialFoodCard
                title={'About Us'}
                slogan={'We Speak The Good For Language'}
                buttonValue={'Learn More'}
                text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores assumenda dolorem doloribus magnam minima.'}
                specialImage={'dumplings.png'}
                secondaryImage={'dumplings.png'}
            />
            <GroceryBasket visible={visible} setVisible={setVisible}/>
        </div>
    );
};

export default Home;