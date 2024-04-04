const validateUsername = (username) =>{
    const regex = /^[a-zA-Z\d_]{4,16}$/;
    const result = regex.test(username);
    return result;
}

const validatePassword = (password) =>{
    const regex = /^.{4,20}$/;
    const result = regex.test(password);
    return result;
}

const validateForm = (username , password) =>{
    const resultUsername = validateUsername(username)
    const resultPassword = validatePassword(password)

    if(resultUsername && resultPassword){
        return true
    }else if(!resultUsername){
        alert("Username is not valid!")
    }else if(!resultPassword){
        alert("Password must be between 4 and 20 characters")
    }

}

export {validateForm}