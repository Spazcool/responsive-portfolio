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
    div1.className = "card col-sm-12 col-md-4 col-lg-2";
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

// --- TODO 

// https://api.nasa.gov/
// https://api.nasa.gov/planetary/apod?api_key=evffvWkvE20YwQYQqknagdjGhb0FZjthYH0ETOTo&date=2020-01-01

// {
//     "date": "2020-01-01",
//     "explanation": "Why is Betelgeuse fading?  No one knows.  Betelgeuse, one of the brightest and most recognized stars in the night sky, is only half as bright as it used to be only five months ago.  Such variability is likely just  normal behavior for this famously variable supergiant, but the recent dimming has rekindled discussion on how long it may be before Betelgeuse does go supernova.  Known for its red color, Betelgeuse is one of the few stars to be resolved by modern telescopes, although only barely.  The featured artist's illustration imagines how Betelgeuse might look up close. Betelgeuse is thought to have a complex and tumultuous surface that frequently throws impressive flares.  Were it to replace the Sun (not recommended), its surface would extend out near the orbit of Jupiter, while gas plumes would bubble out past Neptune.  Since Betelgeuse is about 700 light years away, its eventual supernova will not endanger life on Earth even though its brightness may rival that of a full Moon.  Astronomers -- both amateur and professional -- will surely continue to monitor Betelgeuse as this new decade unfolds.    Free Presentation: APOD Editor to show best astronomy images of 2019 -- and the decade -- in NYC on January 3",
//     "hdurl": "https://apod.nasa.gov/apod/image/2001/BetelgeuseImagined_EsoCalcada_2662.jpg",
//     "media_type": "image",
//     "service_version": "v1",
//     "title": "Betelgeuse Imagined",
//     "url": "https://apod.nasa.gov/apod/image/2001/BetelgeuseImagined_EsoCalcada_960.jpg"
// }


