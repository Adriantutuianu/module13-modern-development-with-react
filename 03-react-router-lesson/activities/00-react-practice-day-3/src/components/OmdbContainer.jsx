import { useState } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

function OmdbContainer() {
  const [searchData, setSearchData] = useState({
    search: "",
    results: [],
  });

  // Add searchMovies function
  const searchMovie = (searchTErm) => {
    API.search(searchTErm)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Add handleInputChange function
  const handleInputChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    setSearchData({
      ...searchData,
      [name]: value,
    });
  };
  // Add handleFormSubmit function
  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchMovie(searchData.search);
  };
  return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card
            heading={searchData.results.Title || "Search for a Movie to Begin"}
          >
            <MovieDetail
              title={searchData.results.Title}
              src={searchData.results.Poster}
              director={searchData.results.Director}
              genre={searchData.results.Genre}
              released={searchData.results.Released}
            />
          </Card>
        </Col>
        <Col size="md-4">
          <Card heading="Search">
            <SearchForm
              value={searchData.search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default OmdbContainer;
