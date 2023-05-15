import "./App.css";
import { AppShell } from "ui";
import { MoviesContent } from "movies-content";
import Playlist from "./PlaylistContent";

function App() {
  return (
    <div>
      <AppShell
        title="Playlist"
        colorScheme="dark"
        navLinks={[
          {
            label: "Home",
            path: "/",
          },
          {
            label: "Playlist",
            path: "/playlist",
          },
        ]}
        routes={[
          { path: "/", element: MoviesContent },
          { path: "/playlist", element: Playlist },
        ]}
      />
    </div>
  );
}

export default App;
