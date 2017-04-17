import React from 'react';

import Sidebar from '../Sidebar';

import './styles.css';

/**
 * @class
 * @extends Component
 */
export default function Layout(props) {
    const { children } = props;

    return (
        <div className="layout">
            <Sidebar />

            <div className="layout__content">
                {children}
            </div>
        </div>
    );
}
