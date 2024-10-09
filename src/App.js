import {
  Hero,
  Header,
  Destination,
  Pricing,
  Ready,
  Footer,
} from "./components";

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
      <Ready />
      <Footer />
    </div>
  );
};
