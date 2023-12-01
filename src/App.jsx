import React, { useState } from "react";
import Header from "./components/header/header.jsx";
import Gallery from "./components/gallery/gallery.jsx";
import Footer from "./components/footer/footer.jsx";
import SelectedBeast from "./components/hornedBeast/selectedBeast.jsx"; 
import data from "./components/beastList/beasts.json"; 

import "bootstrap/dist/css/bootstrap.min.css";


//gpt helped rework for modal
function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);

  const handleSelectBeast = (beast) => {
    setSelectedBeast(beast);
  };

  return (
    <>
      <Header title="Horned Beasts" />
      <Gallery beasts={data} onSelectBeast={handleSelectBeast} />
      {selectedBeast && (
        <SelectedBeast beast={selectedBeast} onClose={() => setSelectedBeast(null)} />
      )}
      <Footer />
    </>
  );
}

export default App;