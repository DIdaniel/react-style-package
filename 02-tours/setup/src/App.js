// @ts-nocheck
import React, { useState, useEffect } from "react";
import Loading from "./loading.jsx";
import Tours from "./Tours.jsx";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetching = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(url);
      const myTours = await res.json();
      setIsLoading(false);
      setTours(myTours);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <main>
      {isLoading ? <Loading /> : <Tours tours={tours} removeTour={removeTour} />}
    </main>
  );
}

export default App;
