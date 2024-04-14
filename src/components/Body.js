import RestaurantCard from "./RestaurantCard";

import resOBJ from "../utils/mockData";
import { useState } from "react"; 





const Body = () => {

    // state variable i.e. more powerful react variable

    // Local State Variable
    
    // equivalent to let listOfRest;

    const [listOfRest , setListOfRest]  = useState(resOBJ); // this is array destructuring
    
    // normal JS Variable
    let listOfRestJS = [{
        "info": {
            "id": "373112",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "smqgbypnbivztchftkaa",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 3.8,
            "parentId": "4961",
            "sla": {
                "deliveryTime": 54,
            }
        }
    },{
        "info": {
            "id": "378112",
            "name": "Dominos",
            "cloudinaryImageId": "smqgbypnbivztchftkaa",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.8,
            "parentId": "4961",
            "sla": {
                "deliveryTime": 54,
            }
        }
    },
    {
        "info": {
            "id": "343112",
            "name": "A Square",
            "cloudinaryImageId": "smqgbypnbivztchftkaa",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "4961",
            "sla": {
                "deliveryTime": 54,
            }
        }
    }
];

 
    return (
        <div className="body">

            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    
                    const filteredList = listOfRest.filter(res => res.info.avgRating >= 4.0);

                    // not a proper way to update the state variable
                    setListOfRest(filteredList);

                }}> Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/* <RestaurantCard resName = "Meghna Foods" cuisine = "Biryani, Asian, Norht India"/>
                <RestaurantCard resName = "KFC" cuisine = "Burger, Chicken, Fast Food"/> */}
                {/* above is sending the data normally and below when we get data from the backend*/ }
                {
                    listOfRest.map((restaurant) => (
                        <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
                    ))
                }
                
            </div>

            
        </div>
    )
}

export default Body;