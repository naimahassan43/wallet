//UI

document.querySelector('#ewallet-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log('Submitted!!');

    const type = document.querySelector('.add__type').value;
    const desc = document.querySelector('.add__description').value;
    const value = document.querySelector('.add__value').value;

    // Alert for empty submission

    if (desc && value) {
        addItems(type, desc, value);

        resetForm();
    } else {
        alert('Please enter description and value');
    }

});


function addItems(type, desc, value) {

    const time = getFormattedTime();
    const newHtml = `
  <div class="item">
    <div class="item-description-time">
        <div class="item-description">
            <p>${desc}</p>
        </div>
        <div class="item-time">
            <p>${time}</p>
        </div>
    </div>
    <div class="item-amount ${type === '+' ? 'income-amount' : 'expense-amount'}">
        <p>${type}$${value}</p>
    </div>
  </div>
`

    const collection = document.querySelector('.collection');
    collection.insertAdjacentHTML('afterbegin', newHtml);

}

function resetForm() {
    document.querySelector('.add__type').value = '+';
    document.querySelector('.add__description').value = '';
    document.querySelector('.add__value').value = '';
}

// Formatted Date and Time
function getFormattedTime() {
    const now = new Date().toLocaleTimeString('en-us', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    const date = now.split(',')[0].split(' ');
    const time = now.split(',')[1];

    const formattedTime = `${date[1]} ${date[0]},${time}`;

    return formattedTime;
}