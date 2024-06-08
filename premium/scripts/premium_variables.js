var ZIPCODE = "77005";
var CITY = "Houston";
var STATE = "Texas";
var STATE_CITY_LIST = [];
var FINISHED_LOADING_FLAG = false;
var ZIPCODES = [];

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

var DATE_TODAY = mm + '/' + dd + '/' + yyyy;

var ZILLOW_LINK = '';






var ZILLOW_FAKE_DATA = {'zillowData':{
                                        "price":275000,
                                        "address": {
                                            "streetAddress":"809 E Harlan Ave",
                                            "zipcode":"78214",
                                            "city":"San Antonio",
                                            "state":"TX",
                                        },
                                        "datePosted":"2024-05-26",
                                        "description":"We're pleased to present the opportunity to acquire a Rare gem property in a highly demanded San Antonio, TX. Including 3 bedrooms and 3 bathrooms, you are going to enjoy the 1,420 sqft that composes this House built in 1933. Nested in an enjoyable neighborhood, and minutes from local attractions, public transportation, and public park. Don't miss this great opportunity!",
                                        "bedrooms":"3",
                                        "bathrooms":"3",
                                        "resoFacts":{
                                            "stories":"1",
                                            "propertySubType":"Single Family Residence",
                                            "lotSize":"8,751 sqft",
                                            "pricePerSquareFoot":194,
                                        },
                                        "rentZestimate":1650,
                                        "zestimate":267700,
                                        "livingArea":1420,
                                        "yearBuilt":1933,
                                        "monthlyHoaFee":1,
                                        "mortgageRates":2,
                                        "imgSrc":'https://photos.zillowstatic.com/fp/fe0c3095baabfc68a32b7c4dabae77ab-p_d.jpg',
                                    },
                        'status':"success"};