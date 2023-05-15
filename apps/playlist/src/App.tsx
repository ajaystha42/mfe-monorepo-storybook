import "./App.css";
import { AppShell } from "ui";
import { MoviesContent } from "movies-content";
import { PlaylistContent } from "playlist-content";

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
          { path: "/playlist", element: PlaylistContent },
        ]}
      />
    </div>
  );
}

export default App;
