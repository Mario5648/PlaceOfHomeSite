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


function userSignup()
{

    let firstName = document.getElementById("firstName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let hashed_password = ``;
    let i = hash_password(password).then((hex) => hashed_password = hex);

    makeCallUserSignup(function(data)
    {
        if(data['status'] == "success")
        {
            location.href = "./premium.html";
        }

    }, firstName, email, hashed_password);

}


function userLogin()
{

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let hashed_password = ``;
    let i = hash_password(password).then((hex) => hashed_password = hex);

    makeCallUserLogin(function(data)
    {
        if(data['status'] == "success")
        {
            location.href = "./premium.html";
        }

    }, email, hashed_password);

}

function logoutUser()
{
    location.href = "./login.html";
}
