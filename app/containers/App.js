import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPhotosIfNeeded } from '../actions'; 
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
        this.props.dispatch(fetchPhotosIfNeeded(newSearch))
    }
    render() {
        const { isFetching, photos } = this.props;
        function processPhotos(photos) {
            return photos.map(function(photo) {
                let id = photo.link;
                let position = id.lastIndexOf('/')
                position = id.lastIndexOf('/', position - 1);
                id = id.substring(position, id.length - 1)
                let text = "Photo By "
                text += photo.author.match(/"(.*?)"/)[1].slice(0,20)
                return <Card key={id} link={photo.link} img={photo.media.m} text={text} />
            })
        }
        return (
            <div>
                <Search title="Search Flickr" onSearch={this.handleSearch.bind(this)}/>
                {isFetching && photos.length === 0 &&
                    <h2>Loading</h2>
                }
                {!isFetching && photos.length > 0 &&
                    <div className='photos'>
                    {processPhotos(photos)}
                    </div>
                }
                {!isFetching && photos.length === 0 &&
                    <h2>No Photos found!</h2>
                }
                <div id='signature'>
                    <label> Coded by 
                        <a href="https://www.github.com/jonathanwmaddison">
                            &nbsp;Jonathan Maddison 
                        </a>
                   </label>
                </div>
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

App.propTypes = {
    photos: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
    currentSearch: PropTypes.string.isRequired
}
export default connect(mapStateToProps)(App);
