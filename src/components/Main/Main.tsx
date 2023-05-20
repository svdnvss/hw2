import React, {useState} from 'react'
import {Child} from "../Child/Child";

export const Main = ({numsArray}: {numsArray?: number[]}) => {
    const [numsArr, setNumsArr] = useState(numsArray ?? [0, 1, 2]);
    const addNum = () => {
        setNumsArr([...numsArr, numsArr.length]);
    }
    const delNum = () => {
        numsArr.pop();
        setNumsArr([...numsArr]);
    }
    return <>
        <button data-testid="add-button" onClick={addNum}>add</button>
        <button data-testid="delete-button" onClick={delNum}>del</button>

        {numsArr.map(num => {
            return <Child key={num} number={num} />
        })}
    </>
}
