import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout';

export default function App(props) {
    const { children } = props;

    return (
        <Layout>
            {children}
        </Layout>
    );
}

App.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]),
};

App.defaultProps = {
    children: null,
};
