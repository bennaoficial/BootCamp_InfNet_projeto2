for (let i = 0; i < 6; i++){
            
    var img_instagram = document.createElement("img");
    img_instagram.id = 'img_link';
    img_instagram.src = `assets/img/instagram/instagram_${i+1}.png`;   
    document.getElementById(`insta_${i+1}`).appendChild(img_instagram);

}

let equipo = ['baixos', 'baterias', 'guitarras'];
    for (let j=0; j<3; j++){
    document.getElementById(`span_equipo_${j}`).innerHTML = equipo[j];
    }

// Json do modal de equipamento

let modalEquipo = {
  Equipamento:[{
    titulo: "Henrique Simões", 
    inst_1: "Baixos", 
    inst_2: "Amplificadores", 
    inst_3: "Pedais e acessórios"
    },
    {
    titulo: "Rick Freitas",
    inst_1: "Baterias",
    inst_2: "Pratos",
    inst_3: "Acessórios"
   
  },
  {
    titulo: "João Guilherme Benna",
    inst_1: "Guitarras",
    inst_2: "Amplificadores",
    inst_3: "Pedais e acessórios"
    
  }]
};



  // Get the modal
var modal = document.getElementById("modal-equipo");


var btn = document.getElementById("modal_bass");
var btn2 = document.getElementById("modal_drum");
var btn3 = document.getElementById("modal_guit");


var span = document.getElementsByClassName("close-2")[0];
// Botao do modal
btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById("titulo").innerHTML= modalEquipo.Equipamento[0].titulo;
  document.getElementById("instrument").innerHTML= modalEquipo.Equipamento[0].inst_1;
  document.getElementById("amps").innerHTML= modalEquipo.Equipamento[0].inst_2;
  document.getElementById("pedais").innerHTML= modalEquipo.Equipamento[0].inst_3;
  for (i=0; i < 4; i++){
    var img_1 = document.createElement("img");
    img_1.id = `imagem_${i}`
    img_1.src = `assets/img/Equipamentos/Modal/Baixo/Baixo_${i+1}.webp`;
    document.getElementById("img_inst").appendChild(img_1);
    var img_2 = document.createElement("img");
    img_2.id = `imagem2_${i}`
    img_2.src = `assets/img/Equipamentos/Modal/Baixo/amp_${i+1}.webp`;
    document.getElementById("img_amps").appendChild(img_2)};
  var img_3 = document.createElement("img");
  img_3.id = `imagem3_0`
  img_3.src = `assets/img/Equipamentos/Modal/Baixo/pedais.webp`;
  document.getElementById("img_pedais").appendChild(img_3);  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      for (i=0; i < 4; i++){
        var img_1 = document.getElementById(`imagem_${i}`);
        document.getElementById("img_inst").removeChild(img_1); 
        var img_2 = document.getElementById(`imagem2_${i}`);
        document.getElementById("img_amps").removeChild(img_2)}; 

     var img_3 = document.getElementById(`imagem3_0`);
     document.getElementById("img_pedais").removeChild(img_3); 
    }
}};

btn2.onclick = function() {
  modal.style.display = "block";
  document.getElementById("titulo").innerHTML= modalEquipo.Equipamento[1].titulo;
  document.getElementById("instrument").innerHTML= modalEquipo.Equipamento[1].inst_1;
  document.getElementById("amps").innerHTML= modalEquipo.Equipamento[1].inst_2;
  document.getElementById("pedais").innerHTML= " ";
  
 
  for (i=0; i < 3; i++){  
    var img_1 = document.createElement("img");
    img_1.id = `imagem_${i}`
    img_1.src = `assets/img/Equipamentos/Modal/Bateria/drum_${i+1}.webp`;
    document.getElementById("img_inst").appendChild(img_1);
    var img_2 = document.createElement("img");
    img_2.id = `imagem2_${i}`
    img_2.src = `assets/img/Equipamentos/Modal/Bateria/Pratos_${i+1}.webp`;
    document.getElementById("img_amps").appendChild(img_2);
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      for (i=0; i < 3; i++){
      var img_1 = document.getElementById(`imagem_${i}`);
      document.getElementById("img_inst").removeChild(img_1); 
      var img_2 = document.getElementById(`imagem2_${i}`);
      document.getElementById("img_amps").removeChild(img_2);
    } 
    }

}};
btn3.onclick = function() {
  modal.style.display = "block";
  document.getElementById("titulo").innerHTML= modalEquipo.Equipamento[2].titulo;
  document.getElementById("instrument").innerHTML= modalEquipo.Equipamento[2].inst_1;
  document.getElementById("amps").innerHTML= modalEquipo.Equipamento[2].inst_2;
  document.getElementById("pedais").innerHTML= modalEquipo.Equipamento[2].inst_3;

  for (i=0; i < 4; i++){
    var img_1 = document.createElement("img");
    img_1.id = `imagem_${i}`
    img_1.src = `assets/img/Equipamentos/Modal/Guitarra/guit_${i+1}.webp`;
    document.getElementById("img_inst").appendChild(img_1);
    var img_2 = document.createElement("img");
    img_2.id = `imagem2_${i}`
    img_2.src = `assets/img/Equipamentos/Modal/Guitarra/amp_${i+1}.webp`;
    document.getElementById("img_amps").appendChild(img_2)};
  for (i=0; i < 3; i++){  
    var img_3 = document.createElement("img");
    img_3.id = `imagem3_${i}`
    img_3.src = `assets/img/Equipamentos/Modal/Guitarra/pedal_${i+1}.webp`;
    document.getElementById("img_pedais").appendChild(img_3);
  }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        for (i=0; i < 4; i++){
        var img_1 = document.getElementById(`imagem_${i}`);
        document.getElementById("img_inst").removeChild(img_1); 
        var img_2 = document.getElementById(`imagem2_${i}`);
        document.getElementById("img_amps").removeChild(img_2); 
        var img_3 = document.getElementById(`imagem3_${i}`);
        document.getElementById("img_pedais").removeChild(img_3); 
      }
    }}};


// placeholders
function nome() {
  document.getElementById("seuNome").placeholder = "Digite o seu nome";
  }

function sobreNome() {
    document.getElementById("sobrenome").placeholder = "Digite o seu sobrenome";
    }

function email() {
   document.getElementById("seuEmail").placeholder = "Digite o seu email para contato";
   }    

function cidade() {
  document.getElementById("suaCidade").placeholder = "Digite a cidade do evento";
  }
  function mensagem() {
    document.getElementById("texto").placeholder = "Descreva o seu evento";
    }

    // popover

    $(function () {
      $('[data-toggle="popover"]').popover()
    })


