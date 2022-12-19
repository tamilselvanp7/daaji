/* eslint-disable no-unused-vars */

import React, { use } from "react";
import classes from "../../../styles/DesigningCSS/cardstyle.module.css";


function Card2({user2}) {
  return (
    
    <div className={classes.card2_main}>
      <img
        src={user2.img}
        alt="#"
      />
      <p />
      <h5>{user2.heading}</h5>
      <p className={classes.p1}>{user2.title}</p>
      <p className={classes.desc}>
        {user2.description}
      </p>
      <p>
        <a href={`/designing-destiny/endorsements${user2.id}` }target="_blank" rel="noreferrer">read more</a>
      </p>
    </div>
    
  );
}

export default Card2;