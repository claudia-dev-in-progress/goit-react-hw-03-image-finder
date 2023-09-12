import { Component } from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

export class Modal extends Component {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  constructor() {
    super();

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    if (event.key === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    return (
      <img
        src={this.props.imageUrl}
        className={style.modal}
        alt="not loaded modal"
      ></img>
    );
  }
}
