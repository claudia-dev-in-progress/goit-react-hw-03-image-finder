import { Component } from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

export class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <button
        type="button"
        className={style.load_more}
        onClick={this.props.onClick}
      >
        Load More
      </button>
    );
  }
}
