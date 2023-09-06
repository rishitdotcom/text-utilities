import { useState } from "react"
import Button from '@mui/material/Button';
import { Box, Typography } from "@mui/material";
import ActionAlerts from "./alert";




function TextForm(props) {



    const [text, settext] = useState("");


    let handleupclick = () => {
        settext(text.toUpperCase());
        props.setalerts("text changed to uppercase");  
        {setTimeout(() => {
            props.setalerts(null)
            }, 2000)}      
    }

    let handletext = (event) => {
        settext(event.target.value);
        
    }
    let handleclear = () => {
        settext("");
        props.setalerts("text cleared  successfully")
        {setTimeout(() => {
            props.setalerts(null)
            }, 2000)}

    }


    const [isUpperCase, setIsUpperCase] = useState(true);

    const handleChange = () => {
        setIsUpperCase(!isUpperCase);
        settext(isUpperCase ? text.toLowerCase() : text.toUpperCase());
    };


    const handleCopyText = () => {
        var text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value);

    }
    const removeextraspace = () => {
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "))
    }


    return (
        <Box id="containertext" sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>

            <ActionAlerts alerts={props.alerts}/>

            <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                <Typography component='p'>   Enter the Text to Analayze </Typography>
            </div>


            <div style={{ width: "30%" }}>
                <textarea id="mybox" rows={12} cols={12} value={text} onChange={(event) => handletext(event)} style={{ width: "120%", boxshadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} ></textarea></div>
            <div style={{ padding: "2px", paddingLeft: "4%" }} >
                <Button sx={{
                    color: props.mode === "dark" ? "white" : "white",
                    backgroundColor: props.mode === "dark" ? "black" : "secondary",marginRight:"3px"
                }} variant="contained" onClick={() => handleupclick()}>uppercase</Button>
                <Button sx={{
                    color: props.mode === "dark" ? "white" : "white",
                    backgroundColor: props.mode === "dark" ? "black" : "primary",marginRight:"3px"
                }} variant="contained" onClick={() => handleclear()}>CLEAR</Button>
                <Button sx={{
                    color: props.mode === "dark" ? "white" : "white",
                    backgroundColor: props.mode === "dark" ? "black" : "primary",marginRight:"3px"
                }} variant="contained" onClick={handleChange} > togglecase </Button> </div>
            <div style={{ padding: "2px", paddingLeft: "4%" }} >
                <Button sx={{
                    color: props.mode === "dark" ? "white" : "white",
                    backgroundColor: props.mode === "dark" ? "black" : "primary",marginRight:"3px"
                }} variant="contained" onClick={removeextraspace} > RemoveExtraSpace </Button>
                <Button sx={{
                    color: props.mode === "dark" ? "white" : "white",
                    backgroundColor: props.mode === "dark" ? "black" : "primary",marginRight:"3px"
                }} variant="contained" onClick={handleCopyText} > COPYTEXT </Button></div>

            <h2> Text Summary </h2>
            <Typography component='p'>{text == "" ? 0 : text.split(" ").length}words and {text.length} characters </Typography>

        </Box>
    )
}

export default TextForm
