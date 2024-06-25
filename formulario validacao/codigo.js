
    function verificar()
        var n1 =  document.getElementById("txtPratPrin").value;
        var n2 =  document.getElementById("txtResp").value;
        if(n1==""){
            window.alert("digite o numero de pessoas para a reserva");
            document.getElementById("txtPratPrin").focus();
            document.getElementById("txtPratPrin").style.backgroundColor="#ff0000";
            return false;
        }
        else if(isNaN(n1)){
            window.alert("digite APENAS numeros para a reserva");
            document.getElementById("txtPratPrin").value="";
            document.getElementById("txtPratPrin").focus();
            document.getElementById("txtPratPrin").style.backgroundColor="#ff0000";
            return false;
        }
        else{
            document.getElementById("txtPratPrin").style.backgroundColor="#0000ff";
        }

        
        if(n2==""){
            window.alert("digite o nome do responsavel pele reserva");
            document.getElementById("txtResp").focus();
            document.getElementById("txtResp").style.backgroundColor="#ff0000";
            return false;
        }
        else{
            document.getElementById("txtResp").style.backgroundColor="#0000ff";
        }
        window.alert("cadastro ok")
        return true;
       function careega() {
        document.addEventListener("keydown",
         function(e) {
            if(e.keycode === 13) {
                e.preventDefault();
            }
         });
       }