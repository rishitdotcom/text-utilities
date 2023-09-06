import { useState, useEffect } from "react";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  //manual merge
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  console.log(username)


  const handleChange2 = (event) => {
    setPassword(event.target.value);
  };
  console.log(password)

  const handleClick = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/postlogin', {     // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        username: username,
        password: password
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(function (response) {
        console.log(response);
      })
      .catch(err => {
        throw err;
      })
  };


  const url = "http://localhost:5000/getlogin";
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch(url)
      .then(data => {
        return data.json();
      })
      .then(logins => {
        console.log(logins);
        setData(logins);
      });
  }, [data]);
  console.log("state data=>", data)

  return (
<>
    <form style={{ width: "567px", marginBlock: "59px" }}>
      <div className="boxstyle" style={{ border: "20px solid white", display: "flex", flexDirection: "column", padding: "36px" }}>

        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <div style={{ margin: "16px", display: "flex", width: "43%", flexDirection: "column" }}>
            <label htmlFor="firstname">Username:</label>
            <input type="text" id="firstname" name="firstname" value={username} onChange={(event) => handleChange(event)} />
          </div>


          <div style={{ margin: "16px", display: "flex", width: "43%", flexDirection: "column" }}>
            <label htmlFor="lastname">Password:</label>
            <input type="text" id="lastname" name="lastname" value={password} onChange={(event) => handleChange2(event)} />
          </div>
        </div>

        <button type="submit" className="btn" onClick={(event) => handleClick(event)}>signup </button>
      </div>
    </form >

<div style={{border: "5px solid blue  "}}>
<table border={2} cellPadding={4} cellSpacing={4}> 
<tbody>
  <tr>
    <th>    usernames </th>
    <th>    passwords </th>
  </tr>

{data.map((item) => {
  return (
    <tr style={{textAlign:"center"}}>
    <td> {item.username} </td>
    <td> {item.password}</td>
  </tr>

  )
})
}
  </tbody>
</table>

</div>
</>
  )
}

export default Login;

