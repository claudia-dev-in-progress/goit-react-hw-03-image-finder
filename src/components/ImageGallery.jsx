import { Component } from "react";
import PropTypes from "prop-types";
import { ImageGaleryItem } from "./ImageGalleryItem";
import style from "./style.module.css";

export class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    onImageClick: PropTypes.func.isRequired,
  };
  render() {
    return (
      <ul className={style.gallery}>
        {this.props.images.map((image) => (
          <ImageGaleryItem
            imageUrl={image.webformatURL}
            onImageClick={this.props.onImageClick}
            largeImageUrl={image.largeImageURL}
          ></ImageGaleryItem>
        ))}
      </ul>
    );
  }
}
