import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import {NotFound} from '../../Errors'
import Text from './Text'

export default ({ match: { url }, id, name, born, image, description, deceased, texts }) =>
    <Fragment>
        <div>
            <img src={image} alt={name} style={{ maxWidth: 300 }} />
            <h1>{name}</h1>
            <h3>{born} &mdash; {deceased}</h3>
            <p>{description}</p>
            <ul>
                {texts.map((text) =>
                    <li key={text.id}>
                        <Link to={`${url}/texts/${text.id}`}>{text.title}</Link>
                    </li>
                )}
            </ul>
            <Route path={`${url}/texts/:textId`} render={(props) => {
                const text = texts.find((text) => text.id === props.match.params.textId)
                if (!text) {
                    return <NotFound/>
                } else {
                    return <Text {...text}/>
                }
            }}/>         
        </div>

    </Fragment>

