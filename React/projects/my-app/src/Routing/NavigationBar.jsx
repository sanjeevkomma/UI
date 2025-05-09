import React from 'react';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className="navSection">
            <ul>
                <Link to="/first">
                    <li>First Page</li>
                </Link>
                <Link to="/second">
                    <li>Second Page</li>
                </Link>
                <Link to="/third">
                    <li>Third Page</li>
                </Link>
                <Link to="/fourth">
                    <li>Fourth Page</li>
                </Link>
            </ul>
        </div>
    );
}
export default NavigationBar;