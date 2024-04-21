function renderRestaurants(restaurantList)
{
    let restaurantTableHTML = ``;


    for(let index = 0 ; index < restaurantList.length; index += 1)
    {
        rating = "rating" in restaurantList[index] ? restaurantList[index]["rating"] : "None";
        restaurantTableHTML += `<tr class="destinationRow">
                                    <td>${restaurantList[index]["displayName"]["text"]}</td>
                                    <td>${rating} <i class="fa fa-star"></i></td>
                                    <td><a class="destinationButton" href="${restaurantList[index]["googleMapsUri"]}">View</a></td>
                                </tr>`;
    }


    document.getElementById("restaurantTable").innerHTML = restaurantTableHTML
}

function renderParks(parkList)
{
    let parkTableHTML = ``;


    for(let index = 0 ; index < parkList.length; index += 1)
    {
        rating = "rating" in parkList[index] ? parkList[index]["rating"] : "None";
        parkTableHTML += `<tr class="destinationRow">
                                    <td>${parkList[index]["displayName"]["text"]}</td>
                                    <td>${rating} <i class="fa fa-star"></td>
                                    <td><a class="destinationButton" href="${parkList[index]["googleMapsUri"]}">View</a></td>
                                </tr>`;
    }


    document.getElementById("parkTable").innerHTML = parkTableHTML
}

function renderGroceryStores(groceryStoreList)
{
    let groceryStoreTableHTML = ``;


    for(let index = 0 ; index < groceryStoreList.length; index += 1)
    {
        rating = "rating" in groceryStoreList[index] ? groceryStoreList[index]["rating"] : "None";
        groceryStoreTableHTML += `<tr class="destinationRow">
                                    <td>${groceryStoreList[index]["displayName"]["text"]}</td>
                                    <td>${rating} <i class="fa fa-star"></td>
                                    <td><a class="destinationButton" href="${groceryStoreList[index]["googleMapsUri"]}">View</a></td>
                                </tr>`;
    }


    document.getElementById("groceryStoreTable").innerHTML = groceryStoreTableHTML
}

