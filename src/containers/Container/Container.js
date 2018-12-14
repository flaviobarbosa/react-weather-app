import React from 'react';

import css from './Container.css';

const container = (props) => (
    <div className={css.Main}>{props.children}</div>
)

export default container;