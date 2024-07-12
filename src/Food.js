
import './Food.css';
function Food(a) {
  return (
    <div className="food-card">
      <img src={a.img} alt="Food" className="food-image" />
      <h2 className="food-title">{a.title}</h2>
      <p className="food-description">{a.description}</p>
      <p className="food-description">{a.price}</p>
    </div>
  );
}

export default Food;
