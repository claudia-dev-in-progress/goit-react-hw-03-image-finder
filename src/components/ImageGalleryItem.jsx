import { Component } from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

export class ImageGaleryItem extends Component {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    onImageClick: PropTypes.func.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
  };

  render() {
    return (
      <li className={style.galleryitem}>
        <img
          src={this.props.imageUrl}
          alt="Not loaded"
          onClick={() => this.props.onImageClick(this.props.largeImageUrl)}
        ></img>
      </li>
    );
  }
}
