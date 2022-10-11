import "../css/index.css";

function Card(props) {
  return (
    <section className="conatiner-section">
      <img src={props.img1} className="main-img"></img>
      <div className="conatiner-section-info">
        <img src={props.img2} className="section-img" />
        <h1>{props.head}</h1>
      </div>
      <p>{props.paragraph}</p>
    </section>
  );
}

export default Card;
