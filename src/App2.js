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
width: 100%;
color: white;
font-size: 8vw;
position: fixed;
background-color:black;
text-align: center;

`
const TAdiv = styled.div`
width: 100%;
font-family: 'Nunito Sans', sans-serif;
color: white;
font-size: 4vw;
text-align: center;
`

const Sa = styled.a`
text-decoration: none;
margin: 0 0.5em ;
//font-family: Futura;
color: white;

`
const Main = styled.div`
margin-top: 16vw;

`
const Desc = styled.div`
font-family: 'Nunito Sans', sans-serif;
font-weight: 600;
margin: 4%;
font-size: 5vw;
color: white;
text-align: left;
`

const Sicon = styled.img`
//flex: 1 1 auto;
width:10%;
padding: 2%;
margin-right: 2%;
filter: invert(1);

`
const Rdiv = styled.div`

text-align: center;

`


function App2() {
  const [contact, setContact] = useState(false);
  const [bio, setBio] = useState(false);

  const biography = "I am a 3D designer passionate about the ever evolving medium of 3D as well as the potential it has for forming compelling and impactful designs whether it be presented as an animation, still images, or immersive experiences. I grew up in NYC and have a strong design sense and passion for the potential that art and design have to positively impact the lives of people and communities. Wanna chat? Contact me!";

  return (
    <>
      <Tdiv>
        Tess Adams
      <TAdiv>
          <Sa onClick={() => setBio(!bio)}>bio</Sa>
          <Sa href={pdf} target="_blank">resume</Sa>
          <Sa onClick={() => setContact(!contact)}>contact</Sa>
        </TAdiv>
        {bio &&
          <Desc onClick={() => setBio(false)}>{"I am a 3D designer passionate about the ever evolving medium of 3D as well as the potential it has for forming compelling and impactful designs whether it be presented as an animation, still images, or immersive experiences."}<br /><br />{"I grew up in NYC and have a strong design sense and passion for the potential that art and design have to positively impact the lives of people and communities"}<br /><br />{"Wanna chat? Contact me!"}</Desc>
        }
        {contact &&
          <Rdiv>
            <a href={"https://www.instagram.com/tess.ada/"} target="_blank"><Sicon src={'./instagram.svg'} /></a>
            <a href={"https://www.linkedin.com/in/tess-adams-8a3552192/"} target="_blank">
              <Sicon src={'./linkedin.svg'} /></a>
            <a href="mailto:adams.tessnyc@gmail.com">
              <Sicon style={{ transform: "translateY(10%)" }} src={'./email.svg'} />
            </a>
          </Rdiv>
        }
      </Tdiv>
      <Main>
        {data.Projects.map((i) =>
          <Mobilepanel project={i} />
        )}


      </Main>
    </>
  );
}

export default App2;
