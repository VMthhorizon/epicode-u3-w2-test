import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Components/Homepage";
import MeteoDetails from "./Components/MeteoDetails";
import PageNotFound from "./Components/PageNotFound";
import MyNavbar from "./Components/MyNavbar";
import MyFooter from "./Components/MyFooter";
import { Container } from "react-bootstrap";

function App() {
  const [search, setSearch] = useState("Napoli");

  return (
    <BrowserRouter>
      <Container
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg')",
          backgroundSize: "cover",
        }}
        fluid
        className="d-flex flex-column min-vh-100 p-0"
      >
        <header>
          <MyNavbar fluid setCity={setSearch}></MyNavbar>
        </header>
        <main className="flex-grow-1 px-2">
          <Routes>
            <Route
              path="/"
              element={<Homepage city={search}></Homepage>}
            ></Route>
            <Route
              path="/details/:cityName"
              element={<MeteoDetails></MeteoDetails>}
            ></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </Routes>
        </main>
        <footer className="bg-light bg-opacity-25">
          <MyFooter></MyFooter>
        </footer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
