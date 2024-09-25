// Task 1: Change Paragraph Text
function changeText() {
    document.getElementById('para').textContent = "The text has been changed!";
}

// Task 2: Hover to Change Background Color
document.getElementById('colorBox').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'blue';
});
document.getElementById('colorBox').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

// Task 3: Add List Item
function addListItem() {
    const ul = document.getElementById('itemList');
    const li = document.createElement('li');
    li.textContent = `Item ${ul.children.length + 1}`;
    ul.appendChild(li);
}

// Task 4: Remove List Item
function removeItem(button) {
    const li = button.parentNode;
    li.parentNode.removeChild(li);
}

// Task 5: Simple Form Submission
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    document.getElementById('formMessage').textContent = `Thank you for submitting, ${name}!`;
}

// Task 6: Show Alert on Button Click
document.getElementById('alertButton').addEventListener('click', function() {
    alert("Button was clicked!");
});

// Task 7: Toggle Hidden Class
function toggleVisibility() {
    const element = document.getElementById('toggleText');
    element.classList.toggle('hidden');
}

// Task 8: Display Input Value
function displayInputValue() {
    const input = document.getElementById('inputField').value;
    document.getElementById('displayArea').textContent = `You entered: ${input}`;
}

// Task 9: Display innerHTML and textContent
function displayContent() {
    const content = document.getElementById('htmlContent');
    document.getElementById('htmlResult').textContent = `innerHTML: ${content.innerHTML}`;
    document.getElementById('textResult').textContent = `textContent: ${content.textContent}`;
}

// Task 10: Display Current Time
setInterval(function() {
    const now = new Date();
    document.getElementById('timeDisplay').textContent = now.toLocaleTimeString();
},1000);
