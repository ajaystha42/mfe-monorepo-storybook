import "./App.css";
import { AppShell } from "ui";

function App() {
  return (
    <div>
      <AppShell
        routes={[{ path: "/", element: () => <div> Home</div> }]}
        title="Movies"
      />
    </div>
  );
}

export default App;
