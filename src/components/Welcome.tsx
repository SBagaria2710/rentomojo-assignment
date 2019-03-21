import React from 'react';

import '../styles/components/Welcome.css'

export default class Welcome extends React.Component<{}, any> {
    render() {
        return(
            <div className='container'>
                <p>Welcome :)</p>
            </div>
        );
    }
}