import './child.css'
import React, {MouseEventHandler} from 'react'

export const Child = ({number}: {number: number}) => {
    const onChildClick = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log(number)
    }
    return <>
        <div className="child" data-testid="child" onClick={(event) => onChildClick(event)}>
            Дочерний компонент № {number}
        </div>
    </>
}
