import { useState, useEffect } from "react";
import axios from "axios";

function CircleWithNewsModal() {

  const [data, setData] = useState([]);

  const URL = "https://newsapi.org/v2/top-headlines?country=in&apiKey=31284955a98346918ef56a37d02840c0";
  const gridContainer = document.getElementById('grid-container');
  const gridItem = document.getElementsByClassName('grid-item');

  //API call using axios
  useEffect(() => {
    axios
      .get(URL)
      .then(response => {
        setData(response.data.articles);
      })
      .catch(err => {
        throw err;
      });
  }, []);


  for (let i = 0; i < gridItem.length; i++)
    // using an variable 'element' to display modalbox 
    gridItem[i].addEventListener('click', () => {
      let elements;
      elements = `
    <div  style="display: flex ; background-Color: hsl(0, 0%, 40%) ; border-Radius: 8px ; box-Shadow: 4px 4px 8px hsl(0, 0%, 50%) ; margin-Bottom: 50px; flex-Direction: column; align-Items: center ;height: 480px; width: 400px; position:relative; ">
      <div style= "height: 280px; width: 400px;">
        <img style=" height: 100%; width: 100%; objectFit: cover;" src=${data[i].urlToImage} />
      </div>

      <h3 style= "margin: 20px 0;textAlign: center; background-Color: white ;"> ${data[i].title} </h3>
      <p style= "textAlign:center;"> ${data[i].description} </p>
      <a href=${data[i].url} style=" marginLeft: 76% ;" >read more</a>
      <button id='close-btn' style="position:absolute; bottom:0; right:0; z-index:55;"> Close </button>
    </div>
  `;
      gridContainer.innerHTML = elements;

      // closing of modalbox by reloading the webpage
      const btn = document.getElementById(`close-btn`);
      btn?.addEventListener('click', () => {
        console.log('helllo');
        location.reload()
      }, false);

    }, false);


  return (

    <div id="grid-container" style={{ display: "grid", gridTemplateColumns: "auto auto auto auto auto", gap: "20px", justifyContent: "center" }} >

      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"> </div>
      <div className="grid-item"></div>
      <div className="grid-item"> </div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"> </div>
      <div className="grid-item"></div>
      <div className="grid-item"> </div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"> </div>
      <div className="grid-item"></div>
      <div className="grid-item"> </div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"> </div>
      <div className="grid-item"></div>
      <div className="grid-item"> </div>
      <div className="grid-item"> </div>

    </div>
  )
}

export default CircleWithNewsModal;


