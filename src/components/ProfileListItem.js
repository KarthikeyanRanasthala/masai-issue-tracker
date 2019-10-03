import React from 'react';
import { Link } from 'react-router-dom'

export const ProfileListItem = (props) => {
    return <Link className='collection-item center black-text' to={`/${props.content}`}>{props.content}</Link>
}