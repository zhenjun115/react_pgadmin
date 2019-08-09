import React from 'react';
import './Menu.css';
import { CSSTransition } from "react-transition-group";

class Menu extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            'show': true
        };
    }

    toggle = () => {
        this.setState( prevState => ({
            'show': !prevState.show
        }))
    }

    render() {
        return (
            <ul className="Menu">
                <li onClick={this.toggle}>1
                    <CSSTransition
                        in={this.state.show}
                        timeout={400}
                        classNames="my-node"
                        key={1}
                    >
                        <div>
                            { "only"}
                        </div>
                    }
                    </CSSTransition>
                </li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        );
    }
}

export default Menu;