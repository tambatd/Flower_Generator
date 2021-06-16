let x = Math.floor((Math.random() * 4) + 2);
let y = "./Tulips/"+x+".png";
let x1 = Math.floor((Math.random() * 11) + 1);
let y1 = "./Tulips/"+x1+".png";

function Flower() {
    return (
      <div>
        <img className="flwr1" src={y1} alt={x1}></img>
        <img className="flwr" src={y} alt={x}></img>
      </div>
    );
  }

export default Flower;
//        <img className="flwr" src={y} alt={x}></img>
