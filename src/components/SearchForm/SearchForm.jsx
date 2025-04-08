import css from "./SearchForm.module.css";

export function SearchForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.elements.search.value;
    props.handleSearch(query);
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <form className={css.form} onSubmit={handleSubmit}>
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
