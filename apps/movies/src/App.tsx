import "./App.css";
import { AppShell } from "ui";

function App() {
  return (
    <div>
      <AppShell
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
          { path: "/", element: () => <div> Home</div> },
          { path: "/playlist", element: () => <div> Playlist</div> },
        ]}
        title="Movies"
      />
    </div>
  );
}

export default App;
