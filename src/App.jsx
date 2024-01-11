import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/Card";
import Details from "./components/Details";
import { createClient } from "contentful";
import { Routes, Route } from "react-router-dom";

function App() {
  const client = createClient({
    space: "hxtsxz7l061e",
    accessToken: "utvoLJo4pyoCkWGeUmeSYnzcrucNPDnqIi1oaCKa0yw",
  });

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        setEntries(response.items[0].fields.accommodations);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Card entries={entries} />} />
        <Route path="/details/:id" element={<Details entries={entries} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
