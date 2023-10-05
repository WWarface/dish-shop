import React from 'react';
import FoodCard, {Directions} from "../../FoodCard/FoodCard";

const Home = () => {
    return (
        <div>
            <FoodCard/>
            <FoodCard direction={Directions.REVERSE}/>
        </div>
    );
};

export default Home;