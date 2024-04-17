import React from "react";
import Header from "./Component/Header/Header";
import Mentors from "./Component/Body/Mentors";
import CartProvider from "./context/ContextProvider";

const App = () => {
  return (
    <CartProvider>
      <Header />
      <Mentors />
    </CartProvider>
  );
};

export default App;
