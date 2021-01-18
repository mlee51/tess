import styled from 'styled-components'
import Iimage from './Iconimg'


const Backpanel = styled.div`
//background-color: red;
position: fixed;
bottom: 5%;
`
const Flex = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: start;
align-items: center;
align-content: space-around;
`


export default function Icons()
{
    console.log("here");
    return(
        <Backpanel>
             
        <Iimage link={"https://www.instagram.com/michaellee.xyz/"} image={'./instagram.svg'} />
        <Iimage link={"https://www.linkedin.com/in/michael-lee-ab96031b0/"} image={'./linkedin.svg'} />
        
        </Backpanel>

    );

}