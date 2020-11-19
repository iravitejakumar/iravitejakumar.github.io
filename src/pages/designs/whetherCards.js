import React from "react"
import './whether.css';

const WhetherCards = () => (
   <div className="container">
      <div className="flip-card">
         <div className="flip-card-inner">
            <div className="flip-card-front">
               <img src="https://i.picsum.photos/id/1054/600/800.jpg?hmac=jZngUdJUDD6R6lQ2HFI84dkpZb2pxALuDjejShaFbj8" alt="Avatar" />
               <h1>{19}</h1>
               <h2>{'Chicago'}</h2>
               <h6>{'Thursday | November 19 | 01:08'}</h6>
            </div>
            <div className="flip-card-back">

            </div>
         </div>
      </div>
   </div>
)

export default WhetherCards;
