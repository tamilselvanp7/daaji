import React from 'react'
import classes from '../../../styles/DesigningCSS/cardstyle.module.css'

function ExcerptsCard({item}) {
  return (
    <div className={classes.down_main}>
      <div className={classes.left} />
      <div className={classes.right}>
        <p>
         {item.description}
        </p>
        <h3>
          <em>-Designing Destiny</em>
        </h3>
      </div>
    </div>
  )
}

export default ExcerptsCard