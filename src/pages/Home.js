import React from 'react';
import '../assets/css/Home.css';
import img from '../assets/img/icecream1.jpg'

export default function Home(){
    // Float image left, text right
    // card light yellow

    return (
        <section>
            <div className="card">
                <div className="nested">
                <div className="home-img"><img src={img} alt="bowl of pink ice cream" /></div>
                <div>Charlie Charlie</div>
            </div>
            </div>
        </section>
    )
}