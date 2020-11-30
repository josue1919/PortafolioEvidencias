


window.addEventListener('load', () => {
    const btnSwitch = document.querySelector('#switch');

    btnSwitch.addEventListener('click', () => {
	    document.getElementById('barralateral').classList.toggle('dark');
    // document.getElementById('contenedor').classList.toggle('dark');
    document.body.classList.toggle('dark');
    document.getElementById('switch').classList.toggle('active')

	// Guardamos el modo en localstorage.
	if(document.getElementById('barralateral').classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
    document.getElementById('barralateral').classList.add('dark');
    document.body.classList.add('dark');

    btnSwitch.classList.add('active');
} else {
    btnSwitch.classList.remove('active');
    document.getElementById('barralateral').classList.remove('dark');
    document.body.classList.remove('dark');

}

});
