import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

export function ImageGallery(props) {
return (
  <ul className={css.list}>
    {props.images.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard src={image.urls} alt={image.alt_description} />
          </li>
        );
    })}
    
  </ul>
);
}