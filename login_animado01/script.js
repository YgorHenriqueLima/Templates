const showHiddenPass = (LoginPass, LoginEye)=>{
    const input = document.getElementById(LoginPass),
          iconEye = document.getElementById(LoginEye)
        
    iconEye.addEventListener("click",()=>{
        if(input.type === 'password'){
            input.type = 'text'

            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-off-line')
        }else{
            input.type = 'password'

            iconEye.classList.remove('ri-eye-line')
            iconEye.classList.add('ri-eye-off-line')
        }

    })
}
showHiddenPass('login-pass','login-eye')