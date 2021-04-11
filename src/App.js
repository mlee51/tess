import './App.css'
import React, { useState } from 'react'
import Imagegrid from './Img'
import styled from 'styled-components'
import './index.css'
import Side from './components/Sidelinks'
import pdf from './michaelleeresume2021.pdf'
import Icons from './components/Social'
import Itemb from './Itembio'



const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  //justify-content: center;
  align-items: auto;
  align-content: start
  overflow: hidden;
`


const Ldiv = styled.div`
font-family: 'Source Code Pro', monospace;
width: 33.33%;
color: white;
font-size: 4.5vw;
position: fixed;
margin-top: 5%;
margin-left: 3%;
line-height: 9.5vh;
`
const Sa = styled.a`
text-decoration: none;
`

const Lexit = styled.div`
z-index: 6;
position: fixed;
//background-color:red;
left: 33.33vw;
width:${props => props.third? '33.33vw' : '16.66vw'};
height:100%;

`


function App() {
  const [active, setActive] = useState(false);
  const ratio = window.innerWidth/window.innerHeight > 2 ? true : false;

  return (
    <Flex>
    <div style={{width: '33.33%'}}></div>
    <Ldiv >
      michaellee
      <br/>
      .xyz
      <br/>
      
      <br/>
      <div onClick={() => setActive(!active)} >
      <Side text={"bio"} />
      </div>
      <Sa href={pdf} target="_blank" >
      <Side text={"resume"} />
      </Sa>
      <Sa href="mailto:mleeteak14@gmail.com">
      <Side text={"contact"} />
      </Sa>
      <Icons/>
    </Ldiv>
    
    {active && <><Itemb/><Lexit third={ratio} onClick={() => setActive(false)}/></>}
   <div onClick={() => setActive(false)}>
    <Imagegrid />
    </div>
    
    </Flex>
   
  );
}

export default App;
