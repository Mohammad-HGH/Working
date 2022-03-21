/*
* this component computes width & height and send it in num args.
* */

import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
    const hasWindow = typeof window !== 'undefined';
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    }

    const [ windowDimensions, setWindowDimensions ] = useState( getWindowDimensions() );
    useEffect( () => {
        if ( hasWindow ) {
            function handleResize() {
                setWindowDimensions( getWindowDimensions() );
            }
            window.addEventListener( 'resize', handleResize );
            return () => window.removeEventListener( 'resize', handleResize );
        }
    }, [ getWindowDimensions, hasWindow ] );
    return windowDimensions;
}

