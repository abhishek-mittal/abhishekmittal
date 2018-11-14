import React from 'react';
import { Spring } from 'react-spring';

export default function() {
    return (
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {style => <div style={style}>portf</div>}
        </Spring>
    );
}
