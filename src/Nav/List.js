import React from 'react';
import './List.css';

function List( props ) {

    /**
     * 渲染列表行数据
     * @param {*} rowData 
     * @param {*} rowHead 
     */
    var renderRow = function( rowData, rowHead ) {
        return <tr> { rowHead.map( (item) => <td>{rowData[item]}</td> ) } </tr>
    };

    const listHead = props.head.map( (item) => <th>{item}</th> );
    const listBody = props.data.map( (rowData) => renderRow( rowData, props.head ) );

    return (
        <table className="List">
            <thead>
                { listHead }
            </thead>
            <tbody>
                { listBody }
            </tbody>
        </table>
    );
}

export default List;