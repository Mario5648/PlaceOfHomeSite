function hash_password(user_password)
{
    const utf8 = new TextEncoder().encode(user_password);
    return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray
        .map((bytes) => bytes.toString(16).padStart(2, '0'))
        .join('');
        return hashHex;
    });
    
}


function checkSignupInputs(firstName, email, password, captcha)
{

    const regex = /^[a-zA-Z0-9\s.,!?@]+$/;

    let captchaValue1 = parseInt(document.getElementById("num1").innerHTML);
    let captchaValue2 = parseInt(document.getElementById("num2").innerHTML);

    if(firstName && email && password && captcha)
    {
        
        if(regex.test(firstName) && regex.test(email) && regex.test(password) && regex.test(captcha))
        {
            if(captcha == (captchaValue1 + captchaValue2))
            {
                return true;
            }else
            {
                alert("Please input correct captcha value");
                return false;
            }
        }
        alert("Please input proper characters");
        return false;
    }else
    {
        alert("Please fill in all input fields");
        return false;
    }
}

function checkLoginInputs(email, password, captcha)
{

    const regex = /^[a-zA-Z0-9\s.,!?@]+$/;

    let captchaValue1 = parseInt(document.getElementById("num1").innerHTML);
    let captchaValue2 = parseInt(document.getElementById("num2").innerHTML);

    if(email && password && captcha)
    {
        
        if(regex.test(email) && regex.test(password) && regex.test(captcha))
        {
            if(captcha == (captchaValue1 + captchaValue2))
            {
                return true;
            }else
            {
                alert("Please input correct captcha value");
                return false;
            }
        }
        alert("Please input proper characters");
        return false;
    }else
    {
        alert("Please fill in all input fields");
        return false;
    }
}
function userSignup()
{

    let firstName = document.getElementById("firstName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let captchaValue = document.getElementById("captchaInput").value;
    
    let validInputs = checkSignupInputs(firstName, email, password, captchaValue)
    

    let hashed_password = ``;
    let i = hash_password(password).then((hex) => hashed_password = hex);
    
    if(validInputs){
        setTimeout(function(){
            makeCallUserSignup(function(data)
            {
                if(data['status'] == "success")
                {
                    location.href = "./premium.html";
                }

            }, firstName, email, hashed_password);
        }, 100);
    }


}


function userLogin()
{

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let captchaValue = document.getElementById("captchaInput").value;

    let validInputs = checkLoginInputs(email, password, captchaValue);


    let hashed_password = ``;
    let i = hash_password(password).then((hex) => hashed_password = hex);

    if(validInputs){
        setTimeout(function(){
            makeCallUserLogin(function(data)
            {
                if(data['status'] == "success")
                {
                    location.href = "./premium.html";
                }

            }, email, hashed_password);
        }, 100);
    }

}

function logoutUser()
{
    localStorage.removeItem("POH_USER_EMAIL");
    localStorage.removeItem("POH_USER_TOKEN");
    localStorage.removeItem("POH_USER_TIER");
    localStorage.removeItem("POH_USER_TOOLS");
    localStorage.removeItem("POH_USER_SUBSCRIPTION_END_DATE");
    location.href = "./login.html";
}

function getUserToken()
{
    localStorage.getItem("POH_USER_TOKEN");
}

function getUserEmail()
{
    localStorage.getItem("POH_USER_EMAIL");
}

function verifyUserToken()
{
    if (localStorage.getItem("POH_USER_TOKEN"))
    {
        return true;
    }else
    {
        location.href = "./login.html"
    }
}