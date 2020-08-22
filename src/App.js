import React from 'react';
import './App.css';
import Row from "./Row"
import requests from "./requests"
import Banner from "./Banner"

function App() {
  return (
    <div className="app">
      <Banner />
      <Row title="Netflix orignal" isLargeRow={true} fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Trending movie" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horrer Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
