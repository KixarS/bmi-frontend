import { Card } from "@mui/material";
import React, { useState } from "react";
import { db } from "./firebase";
import './Calculator.css';

function Calculator() {

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('bmiform').add({
      height:height,
      weight:weight,
      BMI:result
    })
    .then(() => {
      alert('Submitted')
    })
    .catch(error => {
      alert(error.message);
    })
  }


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
    <form className="form" onSubmit={handleSubmit}>
      <Card sx={{ mr: '30rem', ml: '30rem', mt: '25rem', bgcolor: 'white', borderRadius: '5rem' }}>
        <div className="App">
          <div className="container">

            <label htmlFor="height">ส่วนสูง (cm)</label>
            <input type="number" id="height" name="height" value={height} onChange={(e) => setHeight(e.target.value)} required />

            <label htmlFor="weight">น้ำหนัก (kg)</label>
            <input type="number" id="weight" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />

            <button type="submit" onClick={calculateBMI} >Calculate</button>
            <div id="result">{result}</div>
          </div>
        </div>
      </Card>
    </form>
  );
}

export default Calculator;
