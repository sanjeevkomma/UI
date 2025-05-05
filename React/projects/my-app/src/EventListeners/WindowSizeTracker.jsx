import React, { useEffect, useState } from 'react';

function WindowSizeTracker() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };


    }, []); // Empty dependency array → runs once on mount

    return (
        <div>
            <h2>Window Width: {width}px</h2>
            <p>Resize your browser window to see it change.</p>
        </div>
    );
}

export default WindowSizeTracker;
