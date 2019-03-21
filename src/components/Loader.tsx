import React from 'react'
import '../styles/components/Loader.css'

export default class Loader extends React.Component {
    render() {
        return (
            <div className="gooey">
                <span className="dot"></span>
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        );
    }

}