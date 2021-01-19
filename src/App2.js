import './App.css'
import React, { useState } from 'react'
import styled from 'styled-components'
import './index.css'
import Mobilepanel from './components/MobilePanel'
import pdf from './michaelleeresume2021.pdf'
import data from './cata.json';
import biodata from './bio.json';


const Tdiv = styled.div`
font-family: 'Source Code Pro', monospace;
z-index:2;
top: 0;
padding-top: 1vh;
width: 100%;
color: white;
font-size: 8vw;
position: fixed;
background-color:black;
`
const TAdiv = styled.div`
font-family: 'Source Code Pro', monospace;
width: 100%;
color: white;
font-size: 4vw;
`

const Sa = styled.a`
text-decoration: none;
margin-right: 1em;
color: white;
`
const Main = styled.div`
margin-top: 16vw;

`
const Desc = styled.div`
font-family: 'Source Code Pro', monospace;
margin: 4%;
font-size: 5vw;
color: white;
`

const Sicon = styled.img`
//flex: 1 1 auto;
width:10%;
padding: 2%;
margin-right: 2%;
filter: invert(1);

`
const Rdiv =styled.div`
right: 0px;
text-align: right;

`


function App2() {
  const [contact, setContact] = useState(false);
  const [bio, setBio] = useState(false);

  return (
  <>
      <Tdiv>
      michaellee.xyz
      <TAdiv>
        <Sa onClick={() => setBio(!bio)}>bio</Sa>
        <Sa href={pdf} target="_blank">resume</Sa>
        <Sa onClick={() => setContact(!contact)}>contact</Sa>
        </TAdiv>
        {bio &&
        <Desc onClick={() => setBio(false)}>{biodata.text}</Desc>
        }
        {contact &&
        <Rdiv>
        <a href={"https://www.instagram.com/michaellee.xyz/"} target="_blank"><Sicon src={'./instagram.svg'}/></a>
        <a href={"https://www.linkedin.com/in/michael-lee-ab96031b0/"} target="_blank">
        <Sicon src={'./linkedin.svg'}/></a>
        <a href="mailto:mleeteak14@gmail.com">
        <Sicon style={{transform: "translateY(10%)"}} src={'./email.svg'}/>
        </a>
        </Rdiv>
        } 
      </Tdiv>
     
      <Main>
      {data.Projects.map((i)=>
       <Mobilepanel project={i}/>
      )}
     
     
      </Main>
  </>
  );
}

export default App2;
