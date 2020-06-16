import React, {Component} from "react";

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    // методы жизненного цикла
    // запускается после того, как компонент отрендерился в DOM
    // здесь установлен таймер
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    // сбрасываем таймер
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // метод tick запускается каждую секунду и устанавливает state
    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        return (
            <div>
                <h1>Привет, мир!</h1>
                <h2> Сейчас {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

