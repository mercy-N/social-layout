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
        "Jon Snow",
        "Arya Stark",
        "Daenerys Targaryen",
    ];
    $("#input").autocomplete({
        source: profiles,
        autofocus:true
    });
});

$("#input").change();
document.getElementById("input").addEventListener("change", function(){
    var character = this.value;
    switch(character) {
        case "Jon Snow": person(jon);
        break;
        case "Arya Stark": person(arya);
        break;
        case "Daenerys Targaryen": person(daenerys);
    }
});
function person(people){
    document.getElementById('header').src = people.header;
    document.getElementById('name').innerText = people.name;
    document.getElementById('title').innerHTML = people.title;
    document.getElementById('profile').src = people.profile;
    document.getElementById('quote').innerText = people.quote;
    document.getElementById('info').href = people.info
}
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
