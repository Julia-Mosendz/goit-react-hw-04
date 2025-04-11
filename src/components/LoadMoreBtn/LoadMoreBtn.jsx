import css from "./LoadMoreBtn.module.css"

export function LoadMoreBtn(props) {
    return (
      <button
        className={css.btn}
        type="button"
        onClick={props.handleLoadMoreClick}
      >
        Load more
      </button>
    );
}