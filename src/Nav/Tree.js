import React from 'react';
import "./Tree.css";

function Tree() {
    return(
        <ul className="Tree">
            <li>1</li>
            <li>2</li>
            <li className="TreeDir Open">
                3
                <ul>
                    <li>3.1</li>
                    <li>3.2</li>
                </ul>
            </li>
        </ul>
    );
}

export default Tree;