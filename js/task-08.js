const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;
    
    const obj = {};
    obj[email.name] = email.value;
    obj[password.name] = password.value;

  if (email.value === "" || password.value === "") {
    return alert("Увага! Всі поля повинні бути заповнені!");
    };
    console.log(obj);
  event.currentTarget.reset();
};