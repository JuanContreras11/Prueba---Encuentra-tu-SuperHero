$(document).ready(function () {

  $("form").submit(function (event) {
    event.preventDefault();
  
   let valueInput = $("#heroInput").val();
    if(valueInput == ""|| valueInput <=0 || valueInput >=733 ){
      alert("Ingresar id valido")
    }

    $.ajax({
      type: "GET",
      url: "https://superheroapi.com/api.php/4905856019427443/" + valueInput,
      success: function (data) {

        let Inteligencia = data.powerstats.intelligence
        let Fuerza = data.powerstats.strength
        let Velocidad = data.powerstats.speed
        let Resistencia = data.powerstats.durability
        let Poder = data.powerstats.power
        let Combate = data.powerstats.combat
        let imagen = data.image.url
        let nombre = data.name
        let rnombre = data.biography['full-name']
        let nac = data.biography['place-of-birth']
        let raza = data.appearance.race 
        let trabajo = data.work.occupation
        let alter = data.biography['alter-egos']
        let altura = data.appearance.height
        console.log(data)


        $("#heroInfo").html(`

                  <div class="card mb-3 " style="max-width: 640px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="${imagen}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${nombre}</h5>
                            <p class="card-text border-bottom ">Su nombre real es ${rnombre}</p>
                            <p class="card-text border-bottom ">Nacio en ${nac}</p>
                            <p class="card-text border-bottom ">Raza: ${raza} </p>
                            <p class="card-text border-bottom ">Trabajo: ${trabajo} </p>
                            <p class="card-text border-bottom ">Alter egos: ${alter} </p>
                            <p class="card-text border-bottom ">Altura: ${altura} </p>
                            
                            
                        </div>
                        </div>
                    </div>
                    </div>

                `)

                

        var chart = new CanvasJS.Chart("chartContainer", {
          theme: "dark1", // "light1", "light2", "dark1", "dark2"
          
          animationEnabled: true,
          title: {
            text: "Estadisticas del Super Héroe"
          },
          data: [{
            type: "pie",
            startAngle: 20,
            toolTipContent: "<b>{label}}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}",
            dataPoints: [
              { y: Inteligencia, label: "Inteligencia" },
              { y: Fuerza, label: "Fuerza" },
              { y: Velocidad, label: "Velocidad" },
              { y: Resistencia, label: "Resistencia" },
              { y: Poder, label: "Poder" },
              { y: Combate, label: "Combate" },
              
            ]
          }]
        });
        chart.render();
        

      },
    })
  

  })



})
