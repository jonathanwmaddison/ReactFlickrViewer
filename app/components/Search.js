import React, { Component } from 'react';

export default class Search extends Component {
    
    handleSubmit(e) {
            console.log(e)
            e.preventDefault();
            let searchTerm = document.getElementById('tag-search').value
            this.props.onSearch(searchTerm)
    }
    render() {
        
        return (
            <div>
                <form className='form-group' onSubmit={this.handleSubmit.bind(this)}> 
                    <label htmlFor='tag-search'>Search Flickr</label>
                    <input autoComplete="off" ref="input" type="text" className='form-control' id='tag-search' placeholder='tag' />
                    <button type='submit' className='btn btn-outline-primary'>Search</button>
                </form>
            </div>
        )
    }
}
