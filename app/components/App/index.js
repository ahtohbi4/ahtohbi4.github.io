import React from 'react';

import Layout from '../Layout';

export default function App(props) {
    const { children } = props;

    return (
        <Layout>
            {children}
        </Layout>
    );
}
