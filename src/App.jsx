import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getImages } from "./services/service-api";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import "./App.css";
import { Loader } from "./components/Loader/Loader";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";
import { ImageModal } from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

        setTotalPages(response.total_pages);
      } catch (error) {
        toast.error(error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    uploadImages();
  }, [searchQuery, page]);

  const handleSearch = (query) => {
    if (query === searchQuery) {
      toast.error("Please change your query");
      return;
    }
    setImages([]);
    setPage(1);
    setSearchQuery(query);
    setLoading(true);
    setError(false);
  };
  const handleLoadMoreClick = () => {
    setLoading(true);
    setPage((prevPage) => {
      return prevPage + 1;
    });
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      {images.length > 0 && <ImageGallery images={images} />}
      {error && <ErrorMessage />}
      <Loader loading={loading} />
      <Toaster />
      {page < totalPages && !loading && (
        <LoadMoreBtn handleLoadMoreClick={handleLoadMoreClick} />
      )}
      <ImageModal/>
    </>
  );
}

export default App;
