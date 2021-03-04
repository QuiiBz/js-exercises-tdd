module.exports = (password) => {

    if(!password || password.length < 8)
        return false;

    let hasUpper = false, hasLower = false, hasNumber = false;

    for(let char of password) {

        if(!isNaN(char))
            hasNumber = true;
        else if(char.toUpperCase() === char)
            hasUpper = true;
        else if(char.toLocaleLowerCase() === char)
            hasLower = true;
    }

    return hasUpper && hasLower && hasNumber;
}