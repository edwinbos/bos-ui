import React from 'react';

import defaultClasses from './loading.css';
import { mergeClasses } from '@magento/venia-ui/lib/classify';

const Loading = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const className = props.global ? classes.global : classes.root;

    return (
        <div className={className}>
            <div className={classes.loader}></div>
            <span className={classes.message}>{props.children}</span>
        </div>
    );
};

export default Loading;
