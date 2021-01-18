import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components'
import { useSpring, config, animated} from 'react-spring';
import Item from './Item';
import data from './cata.json';

const Grid = styled.div`
display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  //gap: 2% 2%;
  //background-color: red;
  width: 50%;
 
  
`
const projects = data.Projects;

function Imagegrid() {
  
  return(
    <Grid>
      {projects.map((i)=> 
      <Item cell={i}/> )}
    </Grid>
);
}

export default Imagegrid;
