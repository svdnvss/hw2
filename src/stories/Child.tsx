import './child.css'
import React from 'react'

interface ChildProps {
    /**
     * Номер компонента
     */
    number: number;
}

export const Child = ({number}: ChildProps) => {
    const onChildClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(number)
    }
    return <>
        <div className="child" data-testid="child" onClick={onChildClick}>
            Дочерний компонент № {number}
        </div>
    </>
}
