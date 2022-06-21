import Typewriter from "typewriter-effect";

import { Description } from "./styles"

function DescriptionJob() {
  return (
    <Description>
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Desenvolvedor Front-End")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("Desenvolvedor Back-End")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Desenvolvedor Full-Stack")
       .start();
       }}
       />
    </Description>
  );
}
  
export default DescriptionJob;