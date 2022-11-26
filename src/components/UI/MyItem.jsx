import React from 'react'
import classes from './MyItem.module.css'

export default function MyItem({id, text, active, ...props}) {
    let classNames = classes.item;
    return (
        <li {...props} className={active?classNames + " " + classes.item_active:classes.item_disabled+ " "+ classNames }>
            {text}
        </li>
    )
}
