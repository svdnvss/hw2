import React, {Component} from "react";

type CounterComponentStateType = {
    count: number;
}

export class CounterComponent extends Component<CounterComponentStateType, any> {
    state: CounterComponentStateType;

    constructor(props: CounterComponentStateType) {
        super(props);
        this.state = {
            count: props.count,
        }
    }

    shouldComponentUpdate(nextProps: Readonly<CounterComponentStateType>, nextState: Readonly<any>, nextContext: any): boolean {
        if (nextProps.count !== this.state.count) {
            this.setState({
                ...this.state,
                count: nextProps.count
            })
            return true;
        }
        return false;
    }

    componentDidUpdate(prevProps: Readonly<CounterComponentStateType>, prevState: Readonly<any>, snapshot?: any): void {
        if (prevState.count !== this.state.count) {
            console.log('count is updated')
        }
    }

    render(): React.ReactNode {
        return (
            <>
                <div data-testid="count">
                    {this.state.count}
                </div>
            </>
        );
    }
}
