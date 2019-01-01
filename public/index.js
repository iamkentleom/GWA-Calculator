window.onload = () => {
    document.getElementById("button-addon").addEventListener("click", generateFields);

    let danger = `<div class="alert alert-danger" role="alert">
                    <i class="fas fa-info-circle"></i>  Invalid input.
                  </div>`
    let form = `<div class="input-group">
                    <input type="text" placeholder="Course Grade" class="form-control">
                    <input type="text" placeholder="Course Weight" class="form-control">
                </div>
                <p></p>`
    let fields = 0;

    function generateFields(){
        fields = document.getElementById("num-fields").value;
        if(isNaN(fields) == true || fields == ''|| fields < 1){
            document.getElementById("display").innerHTML = danger;
        }else{
            document.getElementById("display").innerHTML = "";
            document.getElementById("initial").innerHTML = "";
            document.getElementById("hel").style.height = "auto";
            let temp = ``;
            console.log(fields);
            for(i = 0; i < fields; i++){
                temp += form;
            }
            document.getElementById("display").innerHTML = temp + `<p class="text-center"><button type="button" class="btn btn-primary">CALCULATE</button></p>`
        }
    }
}