import React from "react";
import domtoimage from "dom-to-image";
import "./App.css";

const names = [
  "Antonio",
  "Rafael",
  "Diego",
  "Miguel",
  "Arthur",
  "Carlos",
  "Joao",
  "Joel",
  "Allison",
  "Zoranildo",
  "David",
  "Neto",
  "Rodolfo",
  "Lucas",
  "Eduardo",
  "Bruno",
  "Henrique",
  "Humberto",
  "Jonas",
  "Caio",
  "Bernardo",
  "Heitor",
  "Pedro",
  "Gabriel",
  "Nicolas",
  "Joaquim",
  "Samuel",
  "Lincoln",
  "Murilo",
  "Isaac",
  "Daniel",
  "Benicio",
  "Cauã",
  "Brian",
  "Lopes",
  "Victor",
  "Bento",
  "Vicente",
  "Emanuel",
  "Otavio"
];
const images = [
  "https://res.cloudinary.com/luneswallet/image/upload/v1592949422/vc.boi/03.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592949364/vc.boi/01.png",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592949422/vc.boi/02.png",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954433/vc.boi/04.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954433/vc.boi/05.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954433/vc.boi/06.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954433/vc.boi/07.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954433/vc.boi/08.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954433/vc.boi/09.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/10.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/11.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/12.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/14.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/15.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/16.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/17.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/18.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/19.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/20.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/21.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/22.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/23.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/24.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/25.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/26.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/27.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/28.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/29.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/30.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/31.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/32.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/33.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/34.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/35.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/36.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/37.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/38.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/39.jpg",
  "https://res.cloudinary.com/luneswallet/image/upload/v1592954434/vc.boi/40.jpg",
];

function App() {
  const download = (id, name) => {
    const node = document.getElementById(id);
    domtoimage
    .toPng(node)
    .then(function(dataUrl) {
      var link = document.createElement('a');
      link.download = `vc-boi-${name}.png`;
      link.href = dataUrl;
      link.click();
    })
    .catch(function(error) {
      console.error("oops, something went wrong!", error);
    });
  };

  const gerar = () => {
    return images.map((image, i) => {
      const n1 = Math.floor(Math.random() * images.length);
      const n2 = Math.floor(Math.random() * images.length);
      return (
        <div key={i} className="parent">
          <div id={`my-node-${i}`} className="container">
            <img src={image} className="avatar"/>
            <p className="name">{names[i]}</p>
          </div>
          <button onClick={() => download(`my-node-${i}`, names[i])}>baixar</button>
        </div>
      );
    });
  };

  return (
    <div className="app">
      {gerar()}
    </div>
  );
}

export default App;
