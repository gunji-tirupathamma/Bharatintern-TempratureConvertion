import styled from 'styled-components'


export const MainContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://previews.123rf.com/images/oraziopuccio/oraziopuccio1907/oraziopuccio190700016/128980921-sunny-summer-background-with-the-thermometer-marking-a-temperature-over-40-degrees-and-bright-sun-on.jpg");
    background-size: cover;
    height: 100vh;
    width: 100%  
`
   

export const TempratureContainer=styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: #f7a1ec; 
   height: 80%;
   width: 40%;
   border-radius: 10px;
   padding: 10px;
   @media screen and (max-width: 576px){
      width: 80%;
     
   }
`
export const HeadingContainer=styled.div`
background-color: #7a1828;
border-radius: 10px;
margin: 10px;
width: 100%;
`

export const Heading=styled.h1`
   color: #fff;
   font-size: 30px;
   font-family: italic;
   font-weight: bold;
   @media screen and (max-width: 576px){
      font-size: 27px;
   }
`

export const Inputcontainer=styled.div`
display: flex;
flex-direction: column;
margin: 10px;
padding: 10px;
align-items: center;

`

export const InputLabel=styled.label`
color: #290000;
font-size: 20px;

`

export const Input=styled.input`
   border-radius: 10px;
   border-width: 2px;
   border-color: #1a8a01;
   border-style:  double ;
   outline: 0px;
   height: 30px;
   padding: 10px;
   font-size: 20px;
`

export const FromContainer=styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   margin-top: 5px;
   padding: 10px;
   
`
export const Desription=styled.p`
   font-size: 20px;
   font-family: Roboto;
   font-weight: 500;
   color: #290000;
   margin-top: 4px;
`

export const InputSelector=styled.select`
   width: 250px;
   height: 35px;
   margin: 4px;
   border-width: 2px;
   outline: 0px;
   border-color: #04b5a6;
   border-radius: 5px;
   font-weight: 600;

   @media screen and (max-width: 576px){
      width: 200px;
   }
`
export const Option=styled.option`
   color: #000;
  
`

export const ButtonsContainer=styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   
`

export const Button=styled.button`
   width: 80px;
   height: 40px;
   border-width: 0px;
   outline: 0px;
   background-color: #661bfa;
   color: #fff;
   font-weight: 700;
   margin: 10px;
   border-radius: 6px;
`

export const ResultContainer=styled.div`
display: flex;
flex-direction: row;
align-items: center;
background-color: #eae8eb;
height: 60px;
width: 300px;
border-radius: 10px;
padding: 10px;

`