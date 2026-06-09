import { useEffect } from "react";
import RoutesConfig from "./shared/routes/routes-config";
import { Toaster } from "sonner";

const App = () => {
  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add("dark");

    return;
  }, []);
  return (
    <div className="min-h-screen">
      <RoutesConfig />
      <Toaster closeButton />
    </div>
  );
};

export default App;
