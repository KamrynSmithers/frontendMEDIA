import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function MediaSelection() {
  const navigate = useNavigate();

  const [hovered, setHovered] = useState<"books" | "movies" | "music" | null>(null);

  // Helper function for background style
  const getBackground = () => {
    switch (hovered) {
      case "books":
        return "url('https://m.media-amazon.com/images/I/81kejUIurGL._SL1500_.jpg')";
      case "movies":
        return "url('https://i.pinimg.com/736x/12/34/56/your-placeholder.jpg')"; // replace with real poster
      case "music":
        return "url('https://i.pinimg.com/736x/6d/a7/70/6da7708a673f604e7e4c5d20827eaa11.jpg')";
      default:
        return "none";
    }
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: getBackground(),
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "all 0.3s ease",
      }}
    >
      {/* BOOKS */}
      <section className="books">
        <button
          className="button"
          onClick={() => navigate("/books")}
          onMouseEnter={() => setHovered("books")}
          onMouseLeave={() => setHovered(null)}
        >
          BOOKS
        </button>
      </section>

      {/* MOVIES */}
      <section className="movies">
        <button
          className="button"
          onClick={() => navigate("/movies")}
          onMouseEnter={() => setHovered("movies")}
          onMouseLeave={() => setHovered(null)}
        >
          MOVIES
        </button>
      </section>

      {/* MUSIC */}
      <section className="streams">
        <button
          className="button"
          onClick={() => navigate("/music")}
          onMouseEnter={() => setHovered("music")}
          onMouseLeave={() => setHovered(null)}
        >
          MUSIC
        </button>
      </section>
    </div>
  );
}

export default MediaSelection;
