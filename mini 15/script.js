const input = document.querySelector('.input');
const imageArea = document.getElementsByClassName('image-area')[0];



window.addEventListener('load', nightDay());

input.addEventListener('keydown',(event) => {
    if(event.key == "Enter"){
        loadImg();
    };
});

function loadImg(){
    removeImages();

    const url = 'https://api.unsplash.com/search/photos/?query='
    +input.value+'&per-page=9&client_id=rm-2_QbRYoKFjbI_ZCbs4Xva8Dix5C7zse90SqVjsCE'
    fetch(url)

    .then(response => {
            if(response.ok){
                return response.json();
            } else {
                alert(response.status)
            }
    })

    .then(data => {
        const imageNodes = [];
        for(let i =0; i <data.results.length; i++){
            imageNodes[i] = document.createElement('div');
            imageNodes[i].className = 'img';
            imageNodes[i].style.backgroundImage ='url('+data.results[i].urls.raw+')'
            imageNodes[i].addEventListener('dblclick', () => {
                window.open(data.results[i].links.download,'_blank')
            });

            imageArea.appendChild(imageNodes[i]);
        };
    });
};

function removeImages(){
    imageArea.innerHTML = '';
};



function nightDay(){
    let date = new Date();
    let hour = date.getHours();

    if(hour <=6 && hour >= 19){
        document.body.style
        .backgroundColor = 'lightgray'
    } else {
        document.body.style.backgroundColor = 'rgba(79, 119, 128, 0.174)'
    };
};