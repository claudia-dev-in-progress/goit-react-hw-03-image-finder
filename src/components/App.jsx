import { Component } from "react";
import { SearchBar } from "./SearchBar";
import { ImageGallery } from "./ImageGallery";
import { getImages } from "../api/api";
import { Button } from "./Button";
import { Loader } from "./Loader";
import { Modal } from "./Modal";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      page: 1,
      perPage: 12,
      query: "",
      isLoading: false,
      largeImageUrl: "",
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  async handleFormSubmit(q) {
    this.setState({ page: 1, isLoading: true });
    const response = await getImages(q, this.state.page, this.state.perPage);
    this.setState({ images: response.hits, query: q, isLoading: false });
  }

  async loadMore() {
    this.setState((prevState) => {
      return {
        isLoading: true,
        page: prevState.page + 1,
      };
    });

    const response = await getImages(
      this.state.query,
      this.state.page,
      this.state.perPage
    );

    this.setState((prevState) => {
      return {
        images: [...prevState.images, ...response.hits],
        isLoading: false,
      };
    });
  }

  handleCloseModal() {
    this.setState({ largeImageUrl: "" });
  }

  handleImageClick(url) {
    this.setState({ largeImageUrl: url });
  }

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit}></SearchBar>
        <ImageGallery
          images={this.state.images}
          onImageClick={this.handleImageClick}
        ></ImageGallery>
        {this.state.images.length > 0 && this.state.isLoading === false && (
          <Button onClick={this.loadMore}></Button>
        )}
        {this.state.isLoading === true && <Loader></Loader>}
        {this.state.largeImageUrl !== "" && (
          <Modal
            imageUrl={this.state.largeImageUrl}
            onClose={this.handleCloseModal}
          ></Modal>
        )}
      </>
    );
  }
}
