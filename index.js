function addingEventListener() {
    const input = document.getElementById('button');
    const clickAlert = () => {
        alert('You clicked me!')
    };
    input.addEventListener('click', clickAlert);
};
addingEventListener();
