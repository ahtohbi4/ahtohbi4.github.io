import React, {Component} from 'react';
import {Link} from 'react-router';

/**
 * @class
 * @extends Component
 */
export default class Layout extends Component {
    render() {
        return (
            <div>
                <div>Alexandr Antonov</div>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects/">Projects</Link>
                        </li>
                        <li>
                            <Link to="/experience/">Experience</Link>
                        </li>
                        <li>
                            <Link to="/skills/">Skills</Link>
                        </li>
                    </ul>
                </nav>

                <div>{this.props.children}</div>
            </div>
        );
    }
}
