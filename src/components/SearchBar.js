import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (e) => {
        this.setState({term: e.target.value});
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
        <div className="serch-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                    <input type="text"
                    placeholder="Search for videos on YouTube..." 
                    value={this.state.term} 
                    onChange={this.onInputChange}/>
            </form>
        </div>);
    }
}

export default SearchBar;