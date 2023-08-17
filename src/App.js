import React,{useState} from 'react';

import './App.css';
import {
  MainContainer,
  TempratureContainer,
  HeadingContainer,
  Heading,
  Inputcontainer,
  InputLabel,
  Input,
  FromContainer,
  Desription,
  InputSelector,
  Option,
  ButtonsContainer,
  Button,
  ResultContainer
  
} from './styledComponents' 

function App() {
  const [inputValue,setInputValue]=useState('')
  const [result,setResult]=useState('')
  const [fromUnit,setFromUnit]=useState('Celsius')
  const [toUnit,setToUnit]=useState('Fahrenheit')
  


  const onChangeHandler=(e)=>{
    setInputValue(e.target.value)
  }

  const tempratureConverter=()=>{
    if(fromUnit===toUnit){
      setResult("Units are Same")
      return;
    }

    const inputValueFloat=parseFloat(inputValue)

    if(isNaN(inputValueFloat)){
      setResult('Invalid Input ')
      return;
    }
    

    let convertedValue;

    if(fromUnit==="Celsius"){
      if(toUnit==="Fahrenheit"){
        convertedValue=(inputValueFloat*9)/5 +32
      }else if(toUnit==="Kelvin"){
        convertedValue=inputValueFloat+273.15
      }
    }else if(fromUnit==="Fahrenheit"){
      if(toUnit==="Celsius"){
        convertedValue=((inputValueFloat-32)*5)/9
      }else if(toUnit==="Kelvin"){
        convertedValue=((inputValueFloat-32)*5)/9+273.15
      }
    }else if(fromUnit==="Kelvin"){
      if(toUnit==="Celsius"){
        convertedValue=inputValueFloat-273.15
      }else if(toUnit==="Fahrenheit"){
        convertedValue=((inputValueFloat - 273.15) * 9) / 5 + 32;
      }
    }


    setResult(`${convertedValue.toFixed(2)} ${toUnit}`)
  }


  const clearDate=()=>{
    setInputValue('')
    setResult('')
  }

  return (
    <div className="App">
      <center>
        <MainContainer>
             <TempratureContainer>
              <HeadingContainer>
                   <Heading>Temprature Converter</Heading>
              </HeadingContainer>
              <Inputcontainer>
                <InputLabel htmlFor="input">Value of Convert:</InputLabel>
                <Input type="text" name="input" id="input" onChange={onChangeHandler} value={inputValue} />
              </Inputcontainer>
              <FromContainer>
                <Desription>From : </Desription>
                <InputSelector value={fromUnit} onChange={(e)=>setFromUnit(e.target.value)}>
                    <Option value="Celsius">Celsius (<span>&#176;</span>C)</Option>
                    <Option value="Fahrenheit">Fahrenheit (<span>&#176;</span>F)</Option>
                    <Option value="Kelvin">Kelvin (K)</Option>
                </InputSelector>
              </FromContainer>
              <FromContainer >
                <Desription className='totext'>To : </Desription>
                <InputSelector value={toUnit} onChange={(e)=>setToUnit(e.target.value)} >
                    <Option value="Celsius">Celsius (<span>&#176;</span>C)</Option>
                    <Option value="Fahrenheit">Fahrenheit (<span>&#176;</span>F)</Option>
                    <Option value="Kelvin">Kelvin (K)</Option>
                </InputSelector>
              </FromContainer> 
              <ButtonsContainer>
                  <Button onClick={clearDate}>Clear</Button>
                  <Button onClick={tempratureConverter}>Calculate</Button>
              </ButtonsContainer>
              <ResultContainer>
                  <Desription>Result :<span className='result'>{result}</span></Desription>
              </ResultContainer>
                
             </TempratureContainer>
        </MainContainer>


      </center>
    </div>
  );
}

export default App;
