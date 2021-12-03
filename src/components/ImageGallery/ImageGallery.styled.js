import styled from '@emotion/styled';

export const Gallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-auto-rows: 240px;
  grid-gap: 15px;
`;

export const GalleryItem = styled.li`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  a:hover {
    cursor: zoom-in;
  }

  img {
    object-fit: cover;
    transition: transform 200ms ease-in-out;
  }

  img:hover {
    transform: scale(1.03);
  }
`;
