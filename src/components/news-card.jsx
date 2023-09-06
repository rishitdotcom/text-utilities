
import axios from "axios";
import { useEffect, useState } from "react";

const URL = "https://newsapi.org/v2/everything?q=tesla&apiKey=31284955a98346918ef56a37d02840c0";

function App() 



export default App;
{
    const [data, setData] = useState([]);
  
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
  
    console.log("Data", data)
  
    return (
      <div  style={{display:"flex", flexDirection:"row" ,padding :"2px", flexWrap: "  wrap"}}>
        {data.length ? data.slice(0, 6).map((item, index) => (
          <div key={index} style={{ marginTop:"40px",marginRight:"35px", backgroundColor:"hsl(0, 0%, 40%)", borderRadius:"8px", boxShadow:"4px 4px 8px hsl(0, 0%, 50%)", marginBottom:"50px", flexDirection:'column', display:"flex", alignItems:"center", height:"450px", width:"400px"}}>
  
            <div className="card-crousel" style={{ height:"250px", width:"400px" }}>
              <img style={{ height:"100%", width:"100%", objectFit: "cover" }} src={item.urlToImage} />
              </div>
  
              <h3 style={{margin : "20px 0", textAlign:"center", backgroundColor:"white"}}> {item.title} </h3>
              <p style={{textAlign:"center"}}> {item.description} </p>
              <a href={item.url}  style={{marginLeft:"76%"}} > read more</a>
          </div>
          
        ))
          : null
        }
      </div>
    )
  
  }
  