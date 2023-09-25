const form = document.querySelector('form');
const statusText = form.querySelector('.button-area span');

form.onsubmit = (e) => {
    e.preventDefault();
    statusText.style.color = "#0d6efd";
    statusText.style.display = "block";
    let xhr = new XMLHttpRequest(); //creating new XMl object
    xhr.open("POST", "message.php", true);
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = xhr.response;
            if (response.indexOf("Email and Message are required!") != -1 ||
            response.indexOf("Enter a valid Email Address!") ||
            response.indexOf("Sorry, failed to send your message!")) {
                statusText.style.color = "red";
            } else {
                form.reset();
                setTimeout(() => {
                    statusText.style.display = "none";
                }, 3000);
            }
            statusText.innerText = response;
        }
    };
    let formData = new FormData(form);
    xhr.send(formData);
};