

import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white text-xl px-10 py-4">
      <Navbar />

      <AppRoutes />
    </div>
  );
};

export default App;
