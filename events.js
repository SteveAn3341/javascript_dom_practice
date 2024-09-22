document.getElementById('hide-btn').addEventListener('click', () => {
document.getElementById('demo-heading').style.display = 'none';
})


document.getElementById('show-btn').addEventListener('click', () => {
    document.getElementById('demo-heading').style.display = 'block';
    })

   


    document.getElementById('change-color-btn').addEventListener('click', () => {
        document.getElementById('demo-heading').style.color = 'blue';
    });

    const heading = document.getElementById('demo-heading');
    const changeColorBtn = document.getElementById('change-color-btn');
    const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Toggle Heading';
document.body.insertBefore(toggleBtn, changeColorBtn);

toggleBtn.addEventListener('click', () => {
    if (heading.style.display === 'none') {
        heading.style.display = 'block';
    } else {
        heading.style.display = 'none';
    }
});


const colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink'];
let colorIndex = 0;
setInterval(() => {
    heading.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 1000);
