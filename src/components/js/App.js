import "../css/index.css";
import Card from "../js/Card";
import data from "./data";

function App() {
  const displayCard = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="app">
      <div className="card">
        <nav className="navigation">
          <h1>🗺</h1>
          <h3>TravelTour</h3>
        </nav>
        <hr />
        <section className="main-section">
          <h1>Power of traveling</h1>
          <p>
            Proin luctus lectus sed blandit facilisis. Pellentesque semper
            porttitor turpis.
          </p>
        </section>
        <section className="all-cards">{displayCard}</section>
      </div>
    </div>
  );
}

export default App;
