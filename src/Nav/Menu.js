import React from 'react';
import './Menu.css';
import { CSSTransition } from "react-transition-group";

class Menu extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      'show': false,
      'data': [ { 'text': 'menu1', 'child': [ { 'text': 'menu1_1' }, { 'text': 'menu1_2' } ], 'show': false }, { 'text': 'menu2' }, { 'text': 'menu3' }, { 'text': 'menu4' } ]
    };
  }

  toggle = () => {
    this.setState( prevState => ({
      'show': !prevState.show
    }))
  }

  menuItem = ( menuItemData ) => {
    return <li onClick={this.toggle}>{ menuItemData.text } { menuItemData.child ? this.subMenu( menuItemData.child ) : '' }</li>
  }

  subMenu = ( subMenuData ) => {
    return(
      <CSSTransition in={ subMenuData.show ? subMenuData.show : '' } timeout={200} className="my-node">
        <ul className="SubMenu">
          { subMenuData.map( ( itemData ) => this.menuItem( itemData ) ) }
        </ul>
      </CSSTransition> )
  }

  render() {
    return (
      <ul className="Menu">
        { this.state.data.map( ( itemData ) => this.menuItem( itemData ) ) }
      </ul>
    );
  }
}

export default Menu;
