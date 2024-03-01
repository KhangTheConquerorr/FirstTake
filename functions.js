const quotesss = ["Talent is something you make bloom, instinct is something you polish","We’ll never win if we don’t believe we can","Even if we’re not confident that we’ll win, even if others tell us we don’t stand a chance, we must never tell ourselves that","To live is to suffer, to survive is to find some meaning in the suffering","The only true wisdom is in knowing you know nothing"];
var Prequote = "";
var Curquote = "";

function Random() {
    do {
        Curquote = quotesss[Math.floor(Math.random() * 5)];
    }
    while (Prequote == Curquote);
    Prequote = Curquote;
    return Curquote;
}

function changeContent() {
    document.getElementById("quotess").innerHTML = Random();
}