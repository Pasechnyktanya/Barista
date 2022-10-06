function onButtonClick() {
    const inf = prompt('Enter your message');
    alert(`Your text is ${inf}`);
}

let counter = 1;

function onButtonClickTwo() {
    const changes = document.querySelector('.button_cheese_dessert_open');
    changes.innerHTML = `it was clicked ${counter} times.`;
    counter += 1;
}
