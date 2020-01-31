import React from 'react';

import defaultClasses from './loader.css';
import { mergeClasses } from '@magento/venia-ui/lib/classify';


const LoadingIndicator = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const className = props.global ? classes.global : classes.root;

    return (
        <div className={className}>
            <div className={classes.loader}></div>
            <span className={classes.message}>{props.children}</span>
        </div>
    );
};

export default LoadingIndicator;
