import React from 'react';
import Axios from 'axios';

import { ProfileListItem } from '../components/ProfileListItem';
import { InfoCard } from '../components/InfoCard';

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contributorsList: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        Axios('https://api.github.com/repos/masai-school/cohort_2/contributors?per_page=100')
            .then(resp => this.setState({ contributorsList: resp.data, isLoaded: true }))
    }

    render() {
        return (
            <div className='container'>
                {this.state.isLoaded ? (
                <>
                    <InfoCard type='Total Members' count={this.state.contributorsList.length} />
                    <div className='collection'>
                        {this.state.contributorsList.map(ele => <ProfileListItem content={ele.login} {...this.props} key={ele.id} />)}
                    </div>
                </>
                ) : (<h5 className='center'>Hold On...</h5>)}
            </div>
        )
    }
}