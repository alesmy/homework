// 1.
let text = "'Lorem ipsum dolor 'sit amet consectetur' adipisicing isn't elit. Quam aren't aspernatur 'ducimus ratione' magni nam odio.'"
text = text.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');
console.log(text);

//2.
window.onload = function () {

    let btn = document.getElementById('submit');
    btn.addEventListener('click', checkForm);

    function checkForm() {

        var name = document.getElementById('name'),
            phone = document.getElementById('phone'),
            email = document.getElementById('email');

        if (!(/^[A-Za-zА-Яа-яЁё ]+$/g.test(name.value))) {
            name.classList.add('error');
        } else {
            name.classList.remove('error');
        }

        if (!(/^\+\d\(\d{3}\)\d{3}-\d{4}$/.test(phone.value))) {
            phone.classList.add('error');
        } else {
            phone.classList.remove('error');
        }

        if (!(/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/.test(email.value))) {
            email.classList.add('error');
        } else {
            email.classList.remove('error');
        }
    }
}