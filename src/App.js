import { Hero } from "./components";
import { Header } from "./components/header/Header";

export const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Hero />
    </div>
  );
};
