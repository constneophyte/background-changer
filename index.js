const clickMe = document.querySelector('.btn');
const colors = ['blue', 'red', 'black', 'green', 'antiqueWhite', 'gold', 'lightcoral'];

clickMe.addEventListener('click', function () {
    var body = document.querySelector('body').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(body);
});


