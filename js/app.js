window.addEventListener('load', function(){

    // var footer = document.getElementById('footer');

    // var btna = document.getElementById('btn-a');

    // var btna = document.querySelector("input[name='a']");

    var txta = document.querySelector('#txt-a');
    var btnb = document.querySelector('#btn-b');
    var img1 = document.querySelector('.img-change');
    var em1 = document.querySelector('.em1')

    btnb.onclick = function(){
        
        // footer.innerText = '바뀌어 버렸잖아?! ㅋㅋㅋ';
        img1.src = "./image/"+txta.value;
        
    };
    
    em1.onclick = function(){
        img1.src = "./image/1.png";
    }

    
});