import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {

    const images = props.images.map((pic) => {
        return <ImageCard key={pic.id} image = {pic} />
    });
    return <div className = 'image-list'>{images} </div>

}

export default ImageList;  