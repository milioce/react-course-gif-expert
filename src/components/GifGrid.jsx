import { GridItem } from "./GridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>
      {isLoading && <h3>Cargando</h3>}
      <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <GridItem key={id} title={title} url={url} />
        ))}
      </div>
    </>
  );
};
