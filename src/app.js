import React from 'react'
import ReactDOM from 'react-dom'

import "./common/style/main.less"
import style from "./main.less"

let a = {x:1, y: 2};
let b=1;

console.log({...a,b});

ReactDOM.render(
    <div className={style.test} >
    <img src={require('./common/img/img1.png')}/>
    <span className="test">React </span>
 </div>,
    document.getElementById('root')
)