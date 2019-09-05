
//dados é um json que contém os arrays protocolo,fora e dentro e todos estes contém apenas um objeto. 

// var info = document.querySelector('#contratante1').value;
// console.log(info)
botao.addEventListener('click',
function info(){
var info;
$(function(e) {
    info = $('#contratante1');
    console.log(info);
})

export const dados={
    protocolo:[{
        num1:info,//'55555',//ADM
        num2:'333',//ADM
        diretor:'Pedroso dos Santos Pereira',//ADM
        num_competencia:'6.607',//ADM
        data:'02/10/2018',//ADM
        //info contratante
        contratante:'International Business Machines Corporation',
        cnpj:' 12.345.678/9012-34',
        rua:'Afonso pena',
        num_endereco:'12',
        cep:'12345-678',
        bairro:'Serrrinha',
        municipio:'Ibirité',
        estado:'Minas Gerais'
    }],
    
    fora:[{
        //info empresa
        contratante:'International Business Machines Corporation',
        cnpj:' 12.345.678/9012-34',
        rua_empresa:'Afonso pena',
        num_endereco_empresa:'12',
        cep_empresa:'12345-678',
        bairro_empresa:'Serrrinha',
        municipio_empresa:'Ibirité',
        estado_empresa:'Minas Gerais',
        //info representante empresa
        representante: 'Zeca pagodinho',
        num_identidade_representante:"MG-12.345.678",
        cpf_representante: "123456789-00",
        rua_representante:'Afonso pena',
        num_endereco_representante:'12',
        cep_representante:'12345-678',
        bairro_representante:'Serrrinha',
        municipio_representante:'Ibirité',
        estado_representante:'Minas Gerais',
        //info estudante
        estudante: "Pedroso pedro da silva mendes",
        num_identidade_estudante:"MG-12.345.678",
        cpf_estudante: "123456678-90",
        rua_estudante:'Afonso pena',
        num_endereco_estudante:'12',
        cep_estudante:'12345-678',
        bairro_estudante:'Serrrinha',
        municipio_estudante:'Ibirité',
        estado_estudante:'Minas Gerais',
        tel_estudante: "999999999",
        ano:"1",
        curso:"Informatica",
        matricula:"2017951111",
        //Area do ADM
        diretor:'Pedroso dos Santos Pereira',
        cpf_diretor:"123456789-00",
        num_competencia:'6.607',
        data:'02/10/2018',
        num_protocolo:"12345/2000",
        dia:"10",
        mes:'dezembro',
        ano:'2019',
        num_apolice:"0674",
        nome_universidade:"UFMG",
        seguradora:"Segurador Gente Seguros SA.",
        //info estagio
        // remunerado:"1",//0->não | 1->sim
        salario:"200",
        salario_ext:"duzentos",
        valor_aux:"30",
        valor_aux_ext:"trinta",
        duracao:"400",
        duracao_ext:"quatrocentas",
        data_ini:"01/03/2019",
        data_ter:"15/10/2019",
        horas_sem:"12",
        horas_sem_ext:'doze',
        horas_dia:"4",
        horas_dia_ext:'quatro',
        supervisor:"Airton Sena",
        coordenador:"Ivete Sangalo"
    }],
    dentro:[{ 
        //info unidade
        unidade_ufmg:"Instituto de Ciências Exatas",
        cnpj_unidade:"17.217.985/0001-04",
        rua_unidade:"Avenida Presidente Antonio Carlos",
        num_endereco_unidade:"6.627",
        cep_unidade:"31270-901",
        bairro_unidade:"Pampulha",
        municipio_unidade:"Belo Horizonte",
        estado_unidade:"Minas Gerais",
        supervisor:"Cesar albuquerque Medeiros",//diretor
        //Area do ADM
        num_poderes:"3.147",
        data_poderes:"22/05/2019",
        diretor:'Pedroso dos Santos Pereira',
        cpf_diretor:"123456789-00",
        num_competencia:'6.607',
        data:'02/10/2018',
        num_apolice:"0674",
        nome_universidade:"UFMG",
        seguradora:"Segurador Gente Seguros SA.",
        //info aluno
        esudante:"Alberto Carlos Alberga dos Santos",
        num_identidade_estudante:"MG-12.345.678",
        cpf_estudante: "123456678-90",
        rua_estudante:'Afonso pena',
        num_endereco_estudante:'12',
        cep_estudante:'12345-678',
        bairro_estudante:'Serrrinha',
        municipio_estudante:'Ibirité',
        estado_estudante:'Minas Gerais',
        tel_estudante: "999999999",
        ano:"1",
        curso:"Informatica",
        matricula:"2017951111",
        //info estagio
        // remunerado:"1",//0->não | 1->sim
        salario:"200",
        salario_ext:"duzentos",
        valor_aux:"30",
        valor_aux_ext:"trinta",
        duracao:"400",
        duracao_ext:"quatrocentas",
        data_ini:"01/03/2019",
        data_ter:"15/10/2019",
        horas_sem:"12",
        horas_sem_ext:'doze',
        horas_dia:"4",
        horas_dia_ext:'quatro',
        supervisor:"Airton Senna",
        coordenador:"Ivete Sangalo"



    }]
}
var areaList = require('protocolo.js')
})