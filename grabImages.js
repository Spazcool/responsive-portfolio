function loadImgs() {
    let baseUrl = 'https://api.nasa.gov/planetary/apod?'
    let date;
    let key = 'evffvWkvE20YwQYQqknagdjGhb0FZjthYH0ETOTo';
    let requestUrl;

    for( let i = 0; i < 10; i++){
        // RANDOMIZE DATE VALUE, AS A PROXY FOR RANDOMIZING THE IMAGES
        date = randomDate(new Date(2012, 0, 1), new Date());
        requestUrl = baseUrl + 'api_key=' + key + '&date=' + date;
        fetch(requestUrl)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                createNodes(data, i);
            })
    }
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}

// THE REASON FOR REACT/ANGULAR ⬇
function createNodes(data, index){
    // CREATE NODES
    let div1 = document.createElement("DIV");
    let div2 = document.createElement("DIV");
    let img = data.media_type === "image" ? document.createElement("IMG") : document.createElement("IFRAME");
    let title = document.createElement("H5");
    let para = document.createElement("P");
    let anchor = document.createElement("A");

    // ADD NECESSARY ATTRIBUTES
    div1.className = "card col-xs-12 col-sm-10 col-md-4 col-lg-2";
    div1.id = "card" + index;
    div2.className = "card-body overflow-auto";
    div2.id = "card-body" + index;
    img.className = "card-img-top fadeIn";
    img.src = data.url;
    anchor.id = "hdImg" + index;
    anchor.href = data.hdurl;
    title.innerHTML = data.title
    para.innerHTML = data.explanation;

    // ADD NODES TO DOCUMENT
    document.getElementById("colleciton").appendChild(div1);
    document.getElementById(div1.id).appendChild(img);
    document.getElementById(div1.id).appendChild(div2);
    document.getElementById(div2.id).appendChild(anchor);
    document.getElementById(anchor.id).appendChild(title);
    document.getElementById(div2.id).appendChild(para);
}