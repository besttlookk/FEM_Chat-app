const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

const media = {
  tablet: customMediaQuery(800),
  laptop: customMediaQuery(1280),
};

export default media;
