import React, {Component} from "react";

class Bind extends Component {
    onClickMe = () => {
        console.log(this);
    }

    render() {
        return (
            <button
                onClick={this.onClickMe}
                type="Button"
            >
                Нажми на меня
            </button>
        );
    }
}
export default Bind;