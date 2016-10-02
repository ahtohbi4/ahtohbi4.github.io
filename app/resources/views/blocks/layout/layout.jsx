import React, {Component} from 'react';
import {Link} from 'react-router';

import Menu from '../menu/menu.jsx';

/**
 * @class
 * @extends Component
 */
export default class Layout extends Component {
    render() {
        return (
            <div>
                <div>Alexandr Antonov</div>

                <Menu/>

                <div>{this.props.children}</div>
            </div>
        );
    }
}
