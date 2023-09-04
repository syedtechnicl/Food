import "./App.css";
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";
import { useGlobalContext } from "./context";
import Hero from "./components/Hero";

function App() {
  const { showModal, favorites, showFavorite } = useGlobalContext();

  return (
    <main>
      <header>
        <Search />
        {showFavorite && favorites.length >= 1 && <Favorites />}
      </header>

      <Hero />

      <Meals />
      {showModal && <Modal />}
    </main>
  );
}

export default App;


