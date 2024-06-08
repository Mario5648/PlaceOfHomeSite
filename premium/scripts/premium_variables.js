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

