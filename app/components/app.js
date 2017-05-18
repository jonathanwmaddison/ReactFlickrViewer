import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>From Component</h1>
                {this.props.imageLibrary[0].title}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    let { imageLibrary } = state
    return {
        imageLibrary
    }
}

App.propTypes = {
  imageLibrary: PropTypes.array.isRequired
}
export default connect(mapStateToProps)(App);
