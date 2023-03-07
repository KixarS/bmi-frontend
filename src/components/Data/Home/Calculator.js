import { Grid, TextField } from '@mui/material';
import styled from 'styled-components';
import './Calculator.css';
import React, { useEffect, useState } from "react";


const CssTextField = styled(TextField)({
  '& label': {
    color: 'black',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});




function Calculator() {
//   // search
// const [filteredActivitycards, setFilteredActivitycards] = useState([])
// const [search, setSearch] = useState("")

// useEffect(() => {
//     setFilteredActivitycards(
//         activitycards.filter( searchcard => {
//             return searchcard.name.includes(search)
//         })
//     )
// }, [search, activitycards])

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [heightError, setHeightError] = useState('');
  const [weightError, setWeightError] = useState('');
  const [result, setResult] = useState('');
  

  const calculateBMI = () => {
    // Validate input values
    const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  let bmiClass;

  if (bmi < 18.5) {
    bmiClass = "ผอม";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiClass = "น้ำหนักปกติ";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiClass = "อ้วน";
  } else {
    bmiClass = "อ้วนเกินไป";
  }

  setResult(`ค่า BMI ของคุณคือ : ${bmi.toFixed(1)} (${bmiClass})`);
}

  return (
    <div className="App">
        <Grid container justifyContent= "center">
          <CssTextField 
            id="search" 
            label="Search" 
            variant="outlined"
            sx={{ mx: "0%", my: "auto", width:1000 }}
            // onChange={e => setSearch(e.target.value)}
          />  
        </Grid>
      
      
      <div className="container">
        <label htmlFor="height">ส่วนสูง (cm)</label>
        <input type="number" id="height" name="height" value={height} onChange={(e) => setHeight(e.target.value)} required />
        <div className="error">{heightError}</div>

        <label htmlFor="weight">น้ำหนัก (kg)</label>
        <input type="number" id="weight" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
        <div className="error">{weightError}</div>

        <button type="button" onClick={calculateBMI}>Calculate</button>
        <div id="result">{result}</div>
      </div>
    </div>
  );
}

export default Calculator;
