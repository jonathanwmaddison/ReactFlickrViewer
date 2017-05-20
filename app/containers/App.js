import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { searchFlickr, fetchPhotosIfNeeded } from '../actions'; 
import Search from '../components/Search'
import Card from '../components/Card'

class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const { dispatch, currentSearch } = this.props;
        dispatch(fetchPhotosIfNeeded(currentSearch));
    }
    componentDidUpdate(previousProps) {
        if (this.props.currentSearch !== previousProps.currentSearch) {
            const { dispatch, currentSearch } = this.props;
            dispatch(fetchPhotosIfNeeded(currentSearch))
        }
    }
    handleSearch(newSearch) {
        this.props.dispatch(searchFlickr(newSearch))
        this.props.dispatch(fetchPhotosIfNeeded(newSearch))
    }
    render() {
    const { currentSearch, photosBySearch, isFetching, lastUpdated, photos } = this.props;

        return (
            <div>
                {isFetching && photos.length === 0 &&
                    <h2>Loading</h2>
                }
                {!isFetching && photos.length > 0 &&
                    <div className='photos'>
                        {photos.map((photo) => <Card photo={photo} />)}
                    </div>
                }
                {isFetching && photos.length === 0 &&
                    <h2>No Photos found!</h2>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    let { currentSearch, photosBySearch } = state
    const {
        isFetching,
        lastUpdated,
        items: photos
    } = photosBySearch[currentSearch] || {
        isFetching: true,
        items: []
    }
    return {
        currentSearch,
        photos,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(App);
