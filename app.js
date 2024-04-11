import ReactDOM from "react-dom/client";
import React from "react";

/*

1. Major 3 Components -> 
    a) Header
        Logo
        NavItems,Cart
    
    b) Body
        SearchComponent
        Reastaurant Container
            Reastaurant Cards
                image
                name of rest
                star rating
                eta
                cussiness
                time of delivery

    
    c) Footer
        Copyright
        Links
        Address
        Contact
*/

const HeaderComponent = () => {
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Q3jFjLl7ckzvYCB0ihSGYAg_CXxUnE8jYQ&s"/>
            </div>

            <div className="nav-items">

                <ul>
                    <li>Name</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>cart</li>
                </ul>

            </div>
        </div>
    )
};

const styleCard = {
    backgroundColor: "#f0f0f0",
}; // a javascript object

const RestaurantCard = (props) => {

    console.log(props);
    const {resData} = props; // destructuring of the Props

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
      } = resData?.info;

      const {deliveryTime} = resData.info?.sla;

    return (
        <div className="res-card" style={{
            backgroundColor : "#f0f0f0",
            // if we want to paas a javascript object then first define all things 
            // required and then we ca simply pass it inside the curley braces

        }}>
            <img className="res-logo"
            alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId}/>
            <h3> {name} </h3>
            <h4> {cuisines.join(", ")} </h4>
            <h4> {avgRating} </h4>
            <h4> {deliveryTime + " minutes"} </h4>
            <h4> {costForTwo}</h4>
        </div>
    )
}

// here stlyes are given using javascript objects
// first curley brackets indicate these is some JS and second curley ones indicate
// the JS objects 

const resOBJ = [
    {
        "info": {
            "id": "373112",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "smqgbypnbivztchftkaa",
            "locality": "Sector 32 A",
            "areaName": "Sector 32",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "4961",
            "avgRatingString": "4.3",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 57,
                "lastMileTravel": 13.7,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "13.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-11 23:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹199"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-ebf650f9-2ad6-4362-9c7a-4c1a182f6081"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-a-sector-32-ludhiana-373112",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "496806",
            "name": "Subway",
            "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
            "locality": "Jagdambey Market",
            "areaName": "Samrala Chowk",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Healthy Food",
                "Salads",
                "Snacks"
            ],
            "avgRating": 4.2,
            "parentId": "2",
            "avgRatingString": "4.2",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 60,
                "lastMileTravel": 12.5,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "12.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-11 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-ebf650f9-2ad6-4362-9c7a-4c1a182f6081"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-jagdambey-market-samrala-chowk-ludhiana-496806",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "289603",
            "name": "Soya Chhap Shri Umesh Son's",
            "cloudinaryImageId": "gdkqcnaq0wwqa9hlvyf0",
            "locality": "Metro road",
            "areaName": "Sector 32",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "Street Food",
                "Fast Food"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "191667",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 62,
                "lastMileTravel": 14.1,
                "serviceability": "SERVICEABLE",
                "slaString": "60-65 mins",
                "lastMileTravelString": "14.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-11 22:15:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-ebf650f9-2ad6-4362-9c7a-4c1a182f6081"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/soya-chhap-shri-umesh-sons-metro-road-sector-32-ludhiana-289603",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "374532",
            "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
            "cloudinaryImageId": "fosqus8x1h9pdq5dq4ei",
            "locality": "Samrala Chowk",
            "areaName": "Chaura Bazar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Ice Cream Cakes"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "582",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 61,
                "lastMileTravel": 14.7,
                "serviceability": "SERVICEABLE",
                "slaString": "60-65 mins",
                "lastMileTravelString": "14.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-11 22:15:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-ebf650f9-2ad6-4362-9c7a-4c1a182f6081"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-samrala-chowk-chaura-bazar-ludhiana-374532",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "370249",
            "name": "Sharman Jain Sweets",
            "cloudinaryImageId": "patyhpmfpudppym6iz9h",
            "locality": "Sector 32 A",
            "areaName": "Sector 32",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Sweets",
                "Chaat",
                "Snacks",
                "North Indian",
                "Punjabi",
                "Beverages"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "21795",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 58,
                "lastMileTravel": 13.7,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "13.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-11 22:10:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Mithai.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-ebf650f9-2ad6-4362-9c7a-4c1a182f6081"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/sharman-jain-sweets-a-sector-32-ludhiana-370249",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]


// not using keys is not acceptable
// best thing isto use uniqueID as the key


const Body = () => {
    return (
        <div className="body">

            <div className="search"> Search </div>
            <div className="res-container">
                {/* <RestaurantCard resName = "Meghna Foods" cuisine = "Biryani, Asian, Norht India"/>
                <RestaurantCard resName = "KFC" cuisine = "Burger, Chicken, Fast Food"/> */}
                {/* above is sending the data normally and below when we get data from the backend*/ }
                {
                    resOBJ.map((restaurant) => (
                        <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
                    ))
                }
                
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className = "app">
            <HeaderComponent/>
            <Body/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

