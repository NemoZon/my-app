import React from 'react'
import classes from './MyButton.module.css'

export default function MyButton({text, active, ...props}) {
    let classNames = classes.btn;
    if(active==="active"){
        classNames = classes.btn+" "+classes.active
    } else if (active==="disabled"){
        classNames = classes.btn+" "+classes.disabled
    }
    return (
        <div className={classNames} {...props}>
            {text}
        </div>
    )
}
