import React from 'react';
import './List.css';

function List() {
    return (
        <table className="List">
            <tbody>
                <tr>
                    <td> column 1,</td>
                    <td> column 2,</td>
                    <td> column 3,</td>
                    <td> column 4</td>
                </tr>
            </tbody>
        </table>
    );
}

export default List;