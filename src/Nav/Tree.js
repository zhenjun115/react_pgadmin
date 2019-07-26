import React from 'react';
import "./Tree.css";

function Tree( props ) {
    var toggleDirNode = function() {
        console.log( "toggle open" );
    };

    /**
     * 树节点结构
     * [{ "name": 'node1', "icon": "dir", "open": true, "child": [ { "name": 'node11' }, {} ] }]
     */

     /**
      * 渲染非叶子节点
      * @param {*} dir 
      */
    var renderDir = function( dir ) {
        const nodes = dir.child.map( (node) => {
            if( !node.child ) {
                return renderNode( node );
            } else {
                renderDir( node );
            }
        } );

        return (
            <ul className="TreeDir">
                {nodes}
            </ul>
        );
    };

    /**
     * 渲染叶子节点
     * @param {*} node 
     */
    var renderNode = function( node ) {
        return (
            <li className="TreeNode" key={node.name}>
                {node.name}
            </li>
        );
    };

    // console.log( props.data );
    const tree = props.data.map( (node) => {
        if( !node.child ) {
            return renderNode(node);
        } else {
            return <li className="TreeNode">{node.name} { renderDir( node ) }</li>
        }
    } );

    return(
        <ul className="Tree">
            {tree}
        </ul>
    );
}

export default Tree;