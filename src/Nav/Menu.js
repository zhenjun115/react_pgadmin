import React from 'react';
import './Menu.css';

function Menu( props ) {

    return (
        <ul className="Menu">
            <li>1
                <ul className="SubMenu">
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                </ul>
            </li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    );
}

export default Menu;