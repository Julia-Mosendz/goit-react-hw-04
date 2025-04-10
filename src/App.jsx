import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getImages } from "./services/service-api";
import { SearchForm } from "./components/SearchBar/SearchBar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import "./App.css";
import { Loader } from "./components/Loader/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    async function uploadImages() {
      try {
        const response = await getImages(searchQuery, page);
        console.log(response);
        if (response.total_pages === 0) {
          throw new Error("Images are not found");
        }

        setImages((prevImages) => {
          return [...prevImages, ...response.results];
        });
      } catch (error) {
        toast.error(error.message);
      }
      finally {setLoading(false)}
    }
    uploadImages();
  }, [searchQuery, page]);
  

  const handleSearch = (query) => {
    setImages([]);
    setPage(1);
    setSearchQuery(query);
    setLoading(true);
  };
  // getImages()
  return (
    <>
      <SearchForm handleSearch={handleSearch} />
      {images.length > 0 && <ImageGallery images={images} />}
      <Loader loading={loading}/>
      <Toaster />
    </>
  );
}

export default App;
