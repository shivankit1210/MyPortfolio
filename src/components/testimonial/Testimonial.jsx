import "./testimonial.scss";

const Testimonial = () => {
  const data = [
    {
      id: 1,
      name: "Shivankit Agarwal",
      title: "Developer",
      img: "assets/am.jpg",
      icon: "",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sequi,ut Ut in possimus explicabo.",
    },
    {
      id: 2,
      name: "Subhash Chandra",
      title: "Enteprenuer",
      img: "assets/subhash.jpg",
      icon: "",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sequi,ut Ut in possimus explicabo.",
      featured:true,
    },
    {
      id: 3,
      name: "Sobhit Agarwal",
      title: "Editor and Photographer",
      img: "assets/sobhit.jpg",
      icon: "",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sequi,ut Ut in possimus explicabo.",
    },
  ];

  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonial</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img src={d.img} className="user" alt="" />
              <img src={d.icon} className="right" alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
