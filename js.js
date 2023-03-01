let tarifaPorHora;
let presupuestofijo =20000;
let HorasporDia =8;

function dayRate()
{
tarifaPorHora= document.getElementById("TarifaInput").value
let tarifaDiaria;

tarifaDiaria=(tarifaPorHora* HorasporDia)


alert(tarifaDiaria)

}
function daysInBudget()
{
    let diasdeTrabajo;
    tarifaPorHora= document.getElementById("TarifaInput").value
    
    let res1 =(tarifaPorHora * HorasporDia)
    diasdeTrabajo=Math.floor(presupuestofijo / res1)
   

    alert(diasdeTrabajo);
}
function discount()
{
    let diasparatrabajar =230;
    tarifaPorHora= document.getElementById("TarifaInput").value
    let tarifaDiaria;
    let descuento=0.42;
    let months= Math.floor(diasparatrabajar/22)
    
    tarifaMensual=(tarifaPorHora* HorasporDia * 22)
    tarifaDiaria=(tarifaMensual *descuento)
    var nuevoPrecio =0;
    for (let i = 0; i < months; i++) {
    
       nuevoPrecio +=tarifaDiaria
alert(nuevoPrecio +"//"+ tarifaMensual)

    }

    
    let descuentofijo=(nuevoPrecio)

    let finish=Math.round(descuentofijo)
    
    alert(finish)
}