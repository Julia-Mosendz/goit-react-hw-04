import css from "./ImageCard.module.css"

export function ImageCard(props) {
    return (
      <div className={css.card}>
        <img className={css.img} src={props.src.small} alt={props.alt} />
      </div>
    );
}