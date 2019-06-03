function CriaPDF(){

    var butao = document.querySelector('#btnImprimir');
    
    var img = document.querySelector('#img').innerHTML;
    var protocolo = document.querySelector('#protocolo').innerHTML;
    //var posProt = document.querySelector('#posProt').innerHTML;
    //var texto_completo = document.getElementById('corpo_texto').innerHTML;
    var p1 = document.querySelector('#p1').innerHTML;
    
    
    var nome = document.querySelector('#nome');
    var nomEstag = document.getElementById('nomEstag');
    var pro = document.getElementById('pro');


    var value;
    
    //pro.removeChild(nomEstag);
    //nomEstag.nodeType="char"
    
    var style = "<style>";
    style = style + "body {padding-left: 210px;padding-right: 210px;}";
    style = style + "img {width: 80px;margin-bottom: 20px;}";
    style = style + "#img {margin: 0 auto;margin-top: 40px;text-align: center;font-family: Times New Roman, Times, serif;}";
    style = style + "h5 {margin-bottom: 0px;}";
    style = style + "#protocolo {margin-top: 10px;text-align: right;font-size: 90%;}";
    style = style + "#corpo_texto {text-align: justify;margin-top: 10px;}";
    style = style + "#indent {text-indent: 1.5em;}";
    style = style + "</style>";
    
    
    var win = window.open('', '', 'height=700, width=700');

    //win.document.write("Nome: " + nome.value + "<br>");
    win.document.write('<html><head>');
    win.document.write(style);
    win.document.write('</head>');
    win.document.write('<body>');
    //win.document.write(texto_completo);
    win.document.write(img);
    win.document.write(pro.textContent+nomEstag.value);
    
    
    win.document.write(p1+" ");
    win.document.write(nome.value);
    win.document.write('</body></html>');
                       
    //win.document.write(minhaTabela);
    //win.document.write(nome);

    win.document.close();
    win.print();
    
    
}


