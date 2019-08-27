
import customGiftBox from "../assets/menu/customgiftbox.png"
import customGiftBox2 from "../assets/menu/customgiftbox@2x.png"
import customGiftBox3 from "../assets/menu/customgiftbox@3x.png"
import rose from "../assets/menu/rose.png"
import rose2 from "../assets/menu/rose@2x.png"
import rose3 from "../assets/menu/rose@3x.png"
import vanilla from "../assets/menu/vanilla.png"
import vanilla2 from "../assets/menu/vanilla@2x.png"
import vanilla3 from "../assets/menu/vanilla@3x.png"


export const getMenuService = (request) => {
    // For the purposes of this app we'll just store the data locally
    let menu = [
        { 
            _id: "adsfasfd",
            image: [customGiftBox, customGiftBox2, customGiftBox3], 
            name: "Custom Gift Box", 
            amount: "Assorted Flavors", 
            description: [
                "This 16 piece gift box is perfect for birthdays, anniversaries, or just for yourself! Customize your flavors or pick from our three gift boxes!",
                "We  offer pre-packed Citrus, Floral or Classic themed boxes. We offer next day delivery for free with all our custom gift boxes!"],
            price: 55 
        },
        { 
            _id: "gasdfhva",
            image: [vanilla, vanilla2, vanilla3], 
            name: "Vanilla Earl Grey Macaron", 
            amount: "1 piece", 
            description: ["Our most popular flavor! Each macaron is filled with earl grey ganache."], 
            price: 3.75
        },
        { 
            _id: "vzxv34oz",
            image: [rose, rose2, rose3], 
            name: "Rose Macaron",
            amount: "1 piece",
            description: ["Our most romantic flavor! Filled with the lightest, sweetest rose ganache, this macaron will definitely be a pleassant surprise."], 
            price: 3.75
        }
    ]
    return menu;
    // Would make a call to the backend here if I implemented one, like so:
    /*
    const GET_API_ENDPOINT = '/api/posts/getAllPosts';
    let authToken = getCookie('token');
    const parameters = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + authToken
        }
    };

    return fetch(GET_API_ENDPOINT, parameters)
        .then(response => {
        return response.clone().json();
        })
        .then(json => {
        return json;
        });
    */
}