const input = document.querySelector('#validation-input')
    
input.addEventListener('blur', correctInput);

function correctInput() {
    if(input.value.length > input.getAttribute('data-length'))
    {
        input.classList.add('invalid');
        input.classList.remove('valid');
        return
    };
    input.classList.remove('invalid');
    input.classList.add('valid');
    return
};
