import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Search extends Component {
    handleSubmit(e) {
            e.preventDefault();
            let searchTerm = document.getElementById('tag-search').value
            this.props.onSearch(searchTerm)
    }
    render() {
        return (
            <div>
                <form className='form-group' onSubmit={this.handleSubmit.bind(this)}> 
                    <label htmlFor='tag-search'>{this.props.title}</label>
                    <input autoComplete="off" type="text" className='form-control' id='tag-search' placeholder='tag' />
                    <button type='submit' className='btn btn-outline-primary'>Search</button>
                </form>
            </div>
        )
    }
}

Search.propTypes = {
    onSearch: PropTypes.func,
    title: PropTypes.string
}
export default Search;
