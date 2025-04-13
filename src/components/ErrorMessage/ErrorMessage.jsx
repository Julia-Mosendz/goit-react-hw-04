import css from "./ErrorMessage.module.css"

export function ErrorMessage() {
    return (
      <>
        <p className={css.error}>This query is not found</p>
      </>
    );
}