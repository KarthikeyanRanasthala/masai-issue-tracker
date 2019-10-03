import React from 'react';

export const IssueListItem = (props) => {
    return <a href={props.data.html_url} className='collection-item center black-text' target='_blank'>{props.data.title}</a>
}