https://teachablemachine.withgoogle.com/models/lL7dcbVtr/


let dog = 0;
let cat = 0;
let lion = 0;
let cow = 0;

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        let classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lL7dcbVtr/model.json', modelReady);
    }).catch(function (err) {
        console.error("Error accessing microphone: ", err);
    });
}

function modelReady() {
    console.log('Model Loaded!');
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
        return;
    }

    console.log('Got Result:', results);

 
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);


    document.getElementById('animalCount').innerText = `Count: Dog: ${dog}, Cat: ${cat}, Lion: ${lion}, Cow: ${cow}`;
    document.getElementById('animalName').innerText = `Detected: ${results[0].label}`;
    document.getElementById('animalCount').style.color = `rgb(${r}, ${g}, ${b})`;
    document.getElementById('animalName').style.color = `rgb(${r}, ${g}, ${b})`;

   
    let img = document.getElementById('animalImage');

    
    if (results[0].label === 'barking') {
        img.src = 'dog.gif';  
        dog++;
    } else if (results[0].label === 'meowing') {
        img.src = 'cat.gif'; 
        cat++;
    } else if (results[0].label === 'roaring') {
        img.src = 'lion.gif'; 
        lion++;
    } else if (results[0].label === 'mooing') {
        img.src = 'cow.gif';  
        cow++;
    } else {
        img.src = 'listen.gif';
    }
}








