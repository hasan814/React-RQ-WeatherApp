import { Toaster } from "sonner";
import { Outlet } from "react-router-dom";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Toaster richColors />
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
