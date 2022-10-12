import Image from "next/image"
import styled from "styled-components"

export default function Veggie(){
   return(
    <>
     <Background>
        <Image
          src="/../public/veggiePizza.jpg"
          alt="Veggie Pizza"
          layout="responsive"
          width={2400}
          height={1596}
        />
      </Background>
    <h1>Veggie Pizza</h1>
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