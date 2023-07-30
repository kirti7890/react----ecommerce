
import Herosection1 from "./components/Herosection1";
import { useProductContext  } from "./context/Productcontext";
const About = () => {

  const { myName } = useProductContext();
  const data = {
    name:" Ecommerce",
}
return (
<>
{myName}
<Herosection1 myData={data}/>;

</>
); 
};

export default About;
