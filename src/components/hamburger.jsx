

function App() {


    function hamburgerOpen(event) {
      const flexbox = document.getElementById('flexbox');
      const topBox = document.getElementById('topbox');
      const centerBox = document.getElementById('centerbox');
      const bottomBox = document.getElementById('bottombox');
      event.stopPropagation();
  
      console.log("PAPA");
      flexbox.style.opacity = "1";
      bottomBox.style.opacity = "0";
  
      topBox.style.transform = "rotate(-50deg)";
      topBox.style.transformOrigin = "17px";
      topBox.style.margin = "2px";
  
      centerBox.style.transform = "rotate(50deg)";
      centerBox.style.transformOrigin = "17px";
      centerBox.style.margin = "1px";
      
    }
  
    function hamburgerClose(event) {
      const flexbox = document.getElementById('flexbox');
      const topBox = document.getElementById('topbox');
      const centerBox = document.getElementById('centerbox');
      const bottomBox = document.getElementById('bottombox');
  event.stopPropagation();
  
      console.log("BETA");
      if ( centerBox) {
        topBox.style.transform = "rotate(0)";
        topBox.style.transformOrigin = "0";
        topBox.style.margin = "";
  
        
        centerBox.style.transform = "rotate(0)";
        centerBox.style.transformOrigin = "0";
        centerBox.style.margin = "";
        flexbox.style.opacity="0";
        bottomBox.style.opacity = "1";
        
      }
    }
  
    return (
      //hamburgur menu
      <>
        <div id="boxcontainer" onClick={(event) => hamburgerOpen(event)} style={{ position:"absolute", zIndex:"10", cursor: "pointer", margin: "20px 10px" }}>
          <div className="innerbox" id="topbox" onClick={(event) => hamburgerClose(event)}></div>
          <div className="innerbox" id="centerbox" ></div>
          <div className="innerbox" id="bottombox" onClick={(event) => hamburgerClose(event)}></div>
        </div>
  
        <div id="flexbox" style={{ opacity: "0" }}>
          <ul style={{color:"white"}} >
            <li>home</li>
            <li>contact us</li>
            <li>place</li>
            <li>about</li>
          </ul>
        </div>
      </>
    )
  }
  
  export default App;
  
  
  