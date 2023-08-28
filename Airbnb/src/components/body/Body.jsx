import AirbnbData from "../../AirbnbData";
import Card from "../card/Card";
import Grid from "../grid/Grid";

export default function Body() {
    const airBnb = AirbnbData.map(
        bnb => 
        <Card
          key={bnb.id}
          {...bnb}
        />
    )
    return (
        <div>
            <Grid />
            <div className="cards-list">
                {airBnb}
            </div>
        </div>
    )
}