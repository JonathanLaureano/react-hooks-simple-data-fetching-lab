import React, { useEffect, useState } from "react";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.message);
          })
    }, [])
  
    if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <img src={items} alt="A Random Dog" />
        </div>
      );
    }
  }

export default App