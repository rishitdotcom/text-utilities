const SignUpForm = () => {

    return (
      <form style={{ width: "567px", marginBlock: "59px" }}>
        <div className="boxstyle" style={{ border: "20px solid white", display: "flex", flexDirection: "column", padding: "36px" }}>
  
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <div style={{ margin: "16px", display: "flex", width: "43%", flexDirection: "column" }}>
              <label htmlFor="firstname">Firstname:</label>
              <input type="text" id="firstname" name="firstname"></input>
            </div>
  
  
            <div style={{ margin: "16px", display: "flex", width: "43%", flexDirection: "column" }}>
              <label htmlFor="lastname">Lastname:</label>
              <input type="lastname" id="lastname" name="lastname"></input>
            </div>
          </div>
  
  
          <div style={{ padding: "20px", justifyContent: "space-around" }}>
            <label htmlFor="gender">Male</label>
            <input type="radio" name="gender" value="male"></input>
            <label htmlFor="gender">Female</label>
            <input type="radio" name="gender" value="female"></input>
          </div>
  
          <div style={{ padding: "20px", justifyContent: "space-around" }} >
          <label for="dob">Date of Birth:</label>
           <input type="date" id="dob"></input></div>
  
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <div style={{ margin: "16px", display: "flex", width: "43%", flexDirection: "column" }}>
              <label htmlFor="address">ADDRESS</label>
              <input type="text" id="address"  ></input>
            </div>
  
  
            <div style={{ margin: "16px", display: "flex", width: "43%", flexDirection: "column" }}>
            <label htmlFor="city">SELECT CITY</label>
            <select id="city" name="city" className="form-select">
      <option value="">Select City</option>
      <option value="Almora">Almora</option>
      <option value="Bageshwar">Bageshwar</option>
      <option value="Barkot">Barkot</option>
      <option value="Bazpur">Bazpur</option>
      <option value="Bhim Tal">Bhim Tal</option>
      <option value="Bhowali">Bhowali</option>
      <option value="Birbhaddar">Birbhaddar</option>
      <option value="Chakrata">Chakrata</option>
      <option value="Chamoli">Chamoli</option>
      <option value="Champawat">Champawat</option>
      <option value="Clement Town">Clement Town</option>
      <option value="Dehradun">Dehradun</option>
      <option value="Devaprayag">Devaprayag</option>
      <option value="Dharchula">Dharchula</option>
      <option value="Doiwala">Doiwala</option>
      <option value="Dugadda">Dugadda</option>
      <option value="Dwarahat">Dwarahat</option>
      <option value="Garhwal">Garhwal</option>
      <option value="Haldwani">Haldwani</option>
      <option value="Harbatpur">Harbatpur</option>
      <option value="Haridwar">Haridwar</option>
      <option value="Jaspur">Jaspur</option>
      <option value="Joshimath">Joshimath</option>
      <option value="Kaladhungi">Kaladhungi</option>
      <option value="Kalagarh Project Colony">Kalagarh Project Colony</option>
      <option value="Kashipur">Kashipur</option>
      <option value="Khatima">Khatima</option>
      <option value="Kichha">Kichha</option>
      <option value="Kotdwara">Kotdwara</option>
      <option value="Laksar">Laksar</option>
      <option value="Lansdowne">Lansdowne</option>
      <option value="Lohaghat">Lohaghat</option>
      <option value="Manglaur">Manglaur</option>
      <option value="Mussoorie">Mussoorie</option>
      <option value="Naini Tal">Naini Tal</option>
      <option value="Narendranagar">Narendranagar</option>
      <option value="Pauri">Pauri</option>
      <option value="Pipalkoti">Pipalkoti</option>
      <option value="Pithoragarh">Pithoragarh</option>
      <option value="Raipur">Raipur</option>
      <option value="Raiwala Bara">Raiwala Bara</option>
      <option value="Ramnagar">Ramnagar</option>
      <option value="Ranikhet">Ranikhet</option>
      <option value="Rishikesh">Rishikesh</option>
      <option value="Roorkee">Roorkee</option>
      <option value="Rudraprayag">Rudraprayag</option>
      <option value="Sitarganj">Sitarganj</option>
      <option value="Srinagar">Srinagar</option>
      <option value="Sultanpur">Sultanpur</option>
      <option value="Tanakpur">Tanakpur</option>
      <option value="Tehri">Tehri</option>
      <option value="Tehri-Garhwal">Tehri-Garhwal</option>
      <option value="Udham Singh Nagar">Udham Singh Nagar</option>
      <option value="Uttarkashi">Uttarkashi</option>
      <option value="Vikasnagar">Vikasnagar</option></select>
            </div>
          </div>
  
          <div style={{ padding: "12px", display: "inlineflex", justifyContent: "space-around" }}>
            <label htmlFor="email">EMAIL</label>
            <input type="text" id="email" ></input>
          </div>
          <div style={{ padding: "12px", display: "inlineflex", justifyContent: "space-around" }}>
            <label htmlFor="phone number">PHONE </label>
            <input type="text" id="phone number" ></input>
          </div>
          <div>
          <label htmlFor="email">UPLOAD RESUME</label>
            <input type="file" id="email" ></input>
          </div>
          <button type="submit" className="btn">signup </button>
          <div style={{textAlign:"center"}}>Already An Account
        <a href="E:\projects\react frontend\src\components\oldcode.jsx">Login</a></div>
  
  
        </div>
      </form >
  
    )
  };
  
  export default SignUpForm;
