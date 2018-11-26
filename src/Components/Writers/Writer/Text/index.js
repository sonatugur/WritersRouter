import React, { Fragment } from 'react'

export default ( {title, published, description}) =>
    <Fragment>
        <div>
            <h1>{title}</h1>
            <h3>{published ? `(${published})` : ''}</h3>
            <p>{description}</p>       
        </div>

    </Fragment>

