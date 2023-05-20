import React, {useEffect, useState} from 'react'
import {Child} from "./Child";

interface MainProps {
    /**
     * Список номеров дочерних компонентов
     */
    numsArray?: number[];
}

export const Main = ({numsArray}: MainProps) => {
    const [numsArr, setNumsArr] = useState(numsArray ?? [0, 1, 2]);
    useEffect(() => {
        setNumsArr(numsArray ?? [0, 1, 2]);
    }, [numsArray])
    const addNum = () => {
        setNumsArr([...numsArr, numsArr.length]);
    }
    const delNum = () => {
        numsArr.pop();
        setNumsArr([...numsArr]);
    }
    return <>
        <button onClick={addNum}>add</button>
        <button onClick={delNum}>del</button>

        {numsArr.map(num => {
            return <Child key={num} number={num} />
        })}
    </>
}
