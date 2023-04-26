import axios from "axios";
import Card from "./Card";


const CardsContainer = () => {
    const countries = axios.get("http://localhost:3001/countries")


return (
    <div>
        {countries.map(county => {
            return <Card>
                flag ={county.flag}
                name={county.name}
                continent={county.continent} 
            </Card>
        } )}
    </div>
)
};

export default CardsContainer;