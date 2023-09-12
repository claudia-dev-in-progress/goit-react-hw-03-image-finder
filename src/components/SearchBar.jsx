import { Component } from "react";
import style from "./style.module.css";
import PropTypes from "prop-types";

export class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      searchQuery: "",
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: "" });
    form.reset();
  }

  render() {
    return (
      <div>
        <form className={style.search_form} onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            value={this.state.searchQuery}
            placeholder="Search images..."
            className={style.SearchForm__input}
            onChange={this.handleChange}
            autoComplete="off"
            name="searchQuery"
          />
          <button type="submit" className={style.SearchForm__button}>
            Search
          </button>
        </form>
      </div>
    );
  }
}
