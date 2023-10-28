import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const images = await getGifs(category);
      setImages(images);
      setIsLoading(false);
    };

    load();
  }, []);

  return {
    images,
    isLoading,
  };
};
