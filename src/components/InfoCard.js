import React from 'react';

export const InfoCard = (props) => {
    return (
        <div className='row'>
            <div className='col s12 m4 offset-m4'>
                <div className='card-panel teal'>
                    <h5 className='center white-text'>{props.type} : {props.count}</h5>
                </div>
            </div>
        </div>
    )
}