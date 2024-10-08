import { Hero, Header, Destination, Pricing } from "./components";

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
      <Destination />
      <Pricing />
    </div>
  );
};
