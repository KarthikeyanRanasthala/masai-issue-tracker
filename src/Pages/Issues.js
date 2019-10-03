import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { IssueListItem } from '../components/IssueListItem';
import { InfoCard } from '../components/InfoCard';

let BASE_URL = 'https://api.github.com/search/issues?q=repo%3Amasai-school%2Fcohort_2+is%3Aopen+assignee%3A';

export class IssuesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issuesList: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        Axios(`${BASE_URL}${this.props.match.params.id}&per_page=100`)
            .then(resp => this.setState({ issuesList: resp.data.items, isLoaded: true }));
    }

    render() {
        return (
            <div className='container'>
                {this.state.isLoaded ? (
                <>
                    <InfoCard type='Open Issues' count={this.state.issuesList.length} />
                    <div className='collection'>
                        {this.state.issuesList.map(ele => <IssueListItem data={ele} key={ele.id} />)}
                    </div>
                </>
                ) : (<h5 className='center'>Hold On...</h5>)}
            </div>
        )
    }
}