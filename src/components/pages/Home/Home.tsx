import React from 'react';
import FoodCard from "../../FoodCard/FoodCard";
import SpecialFoodCard from "../../SpecialFoodCard/SpecialFoodCard";

const Home = () => {
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
                specialImage={"https://dishshop.adaptable.app/image/f7f91549-9801-4cc1-8028-721495f5ff3e.jpg"}
                secondaryImage={'dumplings.png'}
            />
        </div>
    );
};

export default Home;