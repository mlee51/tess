import styled from 'styled-components'
import Iimage from './Iconimg'


const Backpanel = styled.div`
//background-color: red;
position: fixed;
bottom: 5%;
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