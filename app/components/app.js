import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class App extends Component {
    render() {
    let { photosBySearch, currentSearch } = this.props;
        return (
            <div>
                <h1>From Component</h1>
                {
                photosBySearch[currentSearch].isFetching ?
                    <h3>Loading</h3> :
                    photosBySearch[currentSearch].items.map((item) =>
                        <a href={item.link}>{item.title}</a>
                    )
                }                    
            </div>
        )
    }
}

const mapStateToProps = state => {
    let { imageLibrary, currentSearch, photosBySearch } = state
    return {
        imageLibrary,
        currentSearch,
        photosBySearch
    }
}

App.propTypes = {
  imageLibrary: PropTypes.array.isRequired
}
export default connect(mapStateToProps)(App);
