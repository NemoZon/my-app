import React from 'react'
import MyItem from './UI/MyItem'

export default function MyList({items, ...props}) {
    return (
        <ul>
            {
                items.map((elem)=>
                    <MyItem key={elem.id} active={elem.active} text={elem.text}></MyItem>
                )
            }
        </ul>
    )
}
