import React, {Component} from "react";
import {PostComponent, PostComponentProps} from "./PostComponent";
import {CounterComponent} from "./CounterComponent";

type MainComponentStateType = {
    count: number;
    posts: PostComponentProps[];
}

export class MainComponent extends Component<any, any> {
    state: MainComponentStateType;
    controller: AbortController | null;

    constructor(props: never) {
        super(props);
        this.state = {
            count: 0,
            posts: []
        }
        this.controller = null;
    }

    setPosts = (posts: PostComponentProps[]) => {
        this.setState({
            ...this.state,
            posts: [...posts]
        })
    }

    setCount = (count: number) => {
        if (count < 0 && this.state.count === 0) {
            this.setState({
                ...this.state,
                count: 0
            })
            return
        }
        this.setState({
            ...this.state,
            count
        })
    }

    componentDidMount(): void {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((json) => {
                if (!this.controller?.signal.aborted) {
                    this.setPosts(json)
                }
            });
    }

    componentWillUnmount(): void {
        this.controller?.abort()
    }

    render(): React.ReactNode {
        return (
            <>
                <h4>Счетчик не может опуститься ниже 0, но стейт в главном компоненте меняется даже если придется поменять с 0 на 0,
                    чтобы в компоненте CounterComponent сделать проверку на изменение пропов</h4>
                <button onClick={() => {this.setCount(this.state.count + 1)}}>+</button>
                <button onClick={() => {this.setCount(this.state.count - 1)}}>-</button>
                <div><CounterComponent count={this.state.count} /></div>
                {this.state.posts.map((post: PostComponentProps) => <PostComponent key={post.id} post={post} />)}
            </>
        );
    }
}
