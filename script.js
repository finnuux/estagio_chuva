function leiaMais(){
    var pontos= document.getElementById('pontos')
    var maisTexto=document.getElementById('mais')
    var btnleiamais=document.getElementById('btnleiamais')
    
    if(pontos.style.display=== "none")
    {
        pontos.style.display= "inline";
        maisTexto.style.display="none";
    btnleiamais.innerHTML="Leia Mais";
    } else{
        pontos.style.display= "none";
        maisTexto.style.display="inline";
        btnleiamais.innerHTML="Leia Menos";
    
    }
    }
   
    
    
    // treinar o input
    
    function receber_pergunta() {
    
      var pergunta=  document.getElementById('form_text','conteudo').value;
      console.log('pergunta');
      
      
      var conteudou =  document.getElementById('conteudo').value;
      console.log('conteudou')
    
      document.getElementById('receber_form_text').value =  pergunta;
    
    
      document.getElementById('receber_conteudo').value =  conteudou;
    
    
      document.getElementById('value_form_text','conteudo').innerHTML =  pergunta;
      }
    //        //     //  ultima div
    
    function Mudarestado(el) {
            var display = document.getElementById(el).style.display;
            if(display == "none")
                document.getElementById(el).style.display = 'block';
            else
                document.getElementById(el).style.display = 'none';
        }
  
    
    //        //     //  ultima div
    var btn = document.getElementById('btn-div');
    var container = document.querySelector('.container');
    btn.addEventListener('click', function() {
        
      if(container.style.display === 'block') {
          container.style.display = 'none';
      } else {
          container.style.display = 'block';
      }
    });