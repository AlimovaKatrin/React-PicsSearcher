import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import axios from 'axios';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = (term) => {
        axios
            .get('https://api.unsplash.com/search/photos?client_id=9bd62113b51ccad447897685daad48c5362396b840d25d22bf95829568d30bc0', {
                params: { query: term }
            }).then(res => {
                console.log(this)
                this.setState({images:res.data.results})
            })
    }


    render() {
        return (
            <div className='ui container' style={{ marginTop: '20px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
                {/* {this.state.images.length} */}
            </div>
        )
    }
}

export default App;


