import React from 'react';
import "./Tree.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faFolder } from '@fortawesome/free-solid-svg-icons'

class Tree extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            data: props.data
        }
    }

    toggleDirNode = function() {
        console.log( "toggle open" );
    }

    /**
     * 树节点结构
     * [{ "name": 'node1', "icon": "dir", "open": true, "child": [ { "name": 'node11' }, {} ] }]
     */

     /**
      * 渲染非叶子节点
      * @param {*} dir 
      */
    renderDir( dir ) {
        const nodes = dir.child.map( (node) => {
            if( !node.child ) {
                return this.renderNode( node );
            } else {
                this.renderDir( node );
            }
        } );

        return (
            <ul className="TreeDir">
                {nodes}
            </ul>
        );
    }

    /**
     * 渲染叶子节点
     * @param {*} node 
     */
    renderNode( node ) {
        return (
            <li className="TreeNode" key={node.name} onClick={ () => node.icon = "default" }>
                <span><FontAwesomeIcon icon={faFolder} /></span>
                {node.name}
            </li>
        );
    }

    render() {
        // console.log( props.data );
        const tree = this.state.data.map( (node) => {
            if( !node.child ) {
                return this.renderNode(node);
            } else {
                return <li className="TreeNode">{node.name} { this.renderDir( node ) }</li>
            }
        } );

        return(
            <ul className="Tree">
                {tree}
            </ul>
        );
    }
}

export default Tree;