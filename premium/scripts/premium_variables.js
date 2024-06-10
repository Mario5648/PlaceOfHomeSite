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
var ANTICIPATED_RENT = '';
var ANTICIPATED_OCCUPIED_MONTHS = '';
var ANTICIPATED_EXPENSES = '';
var ANTICIPATED_PRINCIPLE = '';
var ANTICIPATED_INTEREST = '';
var ANTICIPATED_DOWNPAYMENT = '';
var ANTICIPATED_CLOSING_COST = '';
var ANTICIPATED_RENOVATION_COST = '';

var TEST_API_CALLS = false;


