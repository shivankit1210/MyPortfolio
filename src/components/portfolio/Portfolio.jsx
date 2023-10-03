import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react";
import { webdata, certificatedata } from "../../data"; 
import { useEffect } from "react";

const Portfolio = () => {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "certificate",
      title: "Certificate",
    },
];

useEffect(() => {
  switch (selected) {
    case "web":
      setData(webdata);
      break;

    case "certificate":
      setData(certificatedata);
      break;
    default:
      setData("web");
      break;
  }
}, [selected])
 
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
