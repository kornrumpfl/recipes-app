import Image from "next/image"
import styled from "styled-components"

export default function Dessert(){
    return(
        <>
        <Background>
          <Image
            src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
            alt="Dessert"
            layout="responsive"
            width={2400}
            height={1599}
          />
        </Background>
        <h1>Dessert</h1>
        </>
    )
 }

 const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  top: 0;
  left: 0;
  z-index: -10;
  @media (max-width: 600px) {
    display: none;
  }
`;