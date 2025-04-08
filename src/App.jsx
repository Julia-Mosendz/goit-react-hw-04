import "./App.css";
import { getImages } from "./services/service-api";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { useEffect, useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    if (searchQuery === "") {
      return
    }
    async function uploadImages() {
      const response = await getImages(searchQuery, page);
      console.log(response);
      if (response.total_pages === 0) {
        console.log("Images are not found")
        return
      }

      setImages((prevImages) => {
        return [...prevImages, ...response.results]
      })
    }
    uploadImages()
  }, [searchQuery, page]);


  const handleSearch = (query) => {
    setImages([])
    setPage(1)
    setSearchQuery(query)
  };
  // getImages()
  return (
    <>
      <SearchForm handleSearch={handleSearch} />
      {images.length>0 && <p>Show results</p>}
    </>
  );
}

export default App;
