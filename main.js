$('#button').click(function(event){
    event.preventDefault();
    if($('#input').css('opacity') == 0){
        $('#input').animate({opacity:1}, 1000);
    }else{
        $('#input').animate({opacity:0}, 1000);
    }
//    $('#input').fadeToggle("slow", "linear");
});
$(".like").click(function(){
    console.log(this);
    $(".like").css("color","red");
    $(".like").css("border-color","red");
});

$(function() { 
    var profiles = [
        "Jon snow",
        "Arya stark",
        "Daenerys targaryen",
    ];
    $("#input").autocomplete({
        source: profiles,
        autofocus:true
    });
});

$("#input").change();

var Person = function() {
var name;
var title;
var header;
var profile;
var info;
var quote;
}
var jon = new Person();
var arya = new Person();
var daenerys = new Person();
arya.name = "Arya stark";
arya.title= "Assasin";
arya.header = "aryaThrone.jpg";
arya.profile ="Arya_stark_s7.jpg" ;
arya.info = "https://en.wikipedia.org/wiki/Arya_Stark";
arya.quote ="Nothing isn't better or worse than anything. Nothing is just nothing";
jon.name = "Jon Snow";
jon.title = "King in the north";
jon.header = "jonThrone.jpg";
jon.profile ="jon.jpg";
jon.info ="https://en.wikipedia.org/wiki/Jon_Snow_(character)";
jon.quote = "The Long Night is coming, and the dead come with it.";
daenerys.name = "Daenerys Targaryen";
daenerys.title = "Protector of the seven kingdoms";
daenerys.header = "daenerysThrone.jpg";
daenerys.profile = "daenerys.jpg";
daenerys.info = "https://en.wikipedia.org/wiki/Daenerys_Targaryen";
daenerys.quote = "My reign has just begun";

console.log(document.getElementById('title').textContent);
document.getElementById("input").addEventListener("change", function(){
    var jon = this.value;
    switch (jon) {
        case "jon": jon1();
        break; 
        case "arya": arya();
        break;
        case "daenerys": daenerys();
    }

});
function jon1(){
    document.getElementById('header').src = jon.header;
    document.getElementById('name').innerText = jon.name;
    document.getElementById('title').innerHTML = jon.title;
    document.getElementById('profile').src = jon.profile;
    document.getElementById('quote').innerText = jon.quote;
    document.getElementById('info').href = jon.info

}
// document.getElementById("arya").addEventListener("change", function(){
//     document.getElementById('header').src = arya.header;
//     document.getElementById('name').innerText = arya.name;
//     document.getElementById('title').innerText = arya.title;
//     document.getElementById('profile').src = arya.profile;
//     document.getElementById('quote').innerText = arya.quote;
//     document.getElementById('info').src = arya.info
//  });


//  document.getElementById("daenerys").addEventListener("change", function(){
//     document.getElementById('header').src = daenerys.header;
//     document.getElementById('name').innerText = daenerys.name;
//     document.getElementById('title').innerText = daenerys.title;
//     document.getElementById('profile').src = daenerys.profile;
//     document.getElementById('quote').innerText = daenerys.quote;
//     document.getElementById('info').src = daenerys.info
//  });



class Profile {
    constructor(header, profile, name, title, quote, info){
        this.header = header;
        this.profile = profile;
        this.name = name;
        this.title = title;
        this.quote = quote;
        this.info = info;
    }
}
var arya = new Profile('aryaThrone.jpg', 'Arya_stark_s7.jpg', 'Arya stark', 'Assasin', 
"Nothing isn't better or worse than anything. Nothing is just nothing", 
'https://en.wikipedia.org/wiki/Arya_Stark');

var jon = new Profile('jonThrone.jpg', 'jon.jpg', 'Jon Snow', 'King in the north', 
'The Long Night is coming, and the dead come with it.',
'https://en.wikipedia.org/wiki/Jon_Snow_(character)');

var daenerys = new Profile('daenerysThrone.jpg', 'daenerys.jpg', 'Daenerys Targaryen', 'Protector of the seven kingdoms',
'My reign has just begun', 'https://en.wikipedia.org/wiki/Daenerys_Targaryen');
