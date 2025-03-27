import css from "./SearchForm.module.css"

export function SearchForm() {
    return (
      <header className={css.header}>
        <div className={css.container}>
          <form className={css.form}>
            <input
              className={css.input}
              type="search"
              name="search"
              placeholder="Search images and photos"
            />
            <button className={css.btn}>Search</button>
          </form>
        </div>
      </header>
    );
}
