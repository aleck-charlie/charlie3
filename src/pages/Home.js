import React from 'react';
import '../assets/css/Home.css';
import img from '../assets/img/icecream1.jpg'

export default function Home(){

    return (
        <section>
            <div className="main-card">
                <div className="nested">
                <div className="home-img"><img src={img} alt="bowl of pink ice cream" /></div>
                <div className="home-text">Peanut butter cups brownie bits peanut butter dark chocolate marshmallows. Peanut butter brownie bits chocolate chip cookie dough whipped cream, rainbow sprinkles strawberry strawberry mint chocolate chip coffee chocolate chips brownie bits. Dark chocolate chocolate syrup rocky road, whipped cream chocolate syrup kitkat strawberry.</div>
            </div>
            </div>
        </section>
    )
}