alert();

function obliczZysk(kwota, iloscLat, oprocentowanie, okres, podatek)
{
    var oprocentowanieOpodatkowane=oprocentowanie;
    if(podatek)
    {
        var oprocentowanieOpodatkowane=0.81*oprocentowanie;        
    }
    
    var k=kwota*Math.pow((1+(oprocentowanieOpodatkowane/okres)),iloscLat*okres);
    
    var factor = Math.pow(10, 2);
    return Math.round(k*factor)/factor;
    
}

function oblicz(event)
{
    event.preventDefault();
    var input=document.getElementsByTagName("input");
    var kwota=input[0].value;
    var iloscLat=input[1].value;
    var oprocentowanie=(input[2].value)/100;
    var okres=document.getElementById("okreskapitalizacji").value
    
    var podatek=document.getElementById("podatek").checked;
    
    
    var wynik=obliczZysk(kwota, iloscLat, oprocentowanie, okres, podatek);
    
    document.getElementById("wynik").innerHTML=wynik;

}


