import React from "react";
import { Gallery, GalleryItem, ImgGallery } from "./ImageGallery.styled";

export default function ImageGallery({ data }) {
  return (
    <Gallery>
      {data.map((movie) => (
        <GalleryItem key={movie.id}>
          <ImgGallery
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt="movie"
          />
          <h3>{movie.title}</h3>
        </GalleryItem>
      ))}
    </Gallery>
  );
}
