import  {imagemData}  from '../models/foto.js';//importação dos dados da imagem

export const fora=function (){
    
    
    var dado={
        //Informações da Empresa
        contratante:$("#unidade2").value,//nome do contratante
        cnpj:$("#cnpj2").value,
        rua_empresa:$("#rua2").value,//endereço da empresa
        num_endereco_empresa:$("#numero2").value,
        cep_empresa:$("#cep2").value,
        bairro_empresa:$("#bairro2").value,
        municipio_empresa:$("#municipio2").value,
        estado_empresa:$("#estado2").value,
        //Informações do Representante Empresa
        representante:$("#representante").value,//nome do representante
        num_identidade_representante:$("#id_representante").value,
        cpf_representante:$("#cpf_representante").value,
        rua_representante:$("#rua_representante").value,
        num_endereco_representante:$("#num_representante").value,
        cep_representante:$("#cep_representante").value,
        bairro_representante:$("#bairro_representante").value,
        municipio_representante:$("#municipio_representante").value,
        estado_representante:$("#estado_representante").value,
        // Informações do Estudante
        estudante:$("#nome1").value,// nomde do estudante
        num_identidade_estudante:$("#identidade1").value,
        cpf_estudante:$("#cpf1").value,
        rua_estudante:$("#rua_e2").value,// endereço do estudante
        num_endereco_estudante:$("#numero_e2").value,
        cep_estudante:$("#cep_e2").value,
        bairro_estudante:$("#bairro_e2").value,
        municipio_estudante:$("#municipio_e2").value,
        estado_estudante:$("#estado_e2").value,
        tel_estudante:$("#tel_e2").value,
        ano:$("#ano_e2").value,//1°,2° ou 3°
        curso:$("#curso_e2").value,
        matricula:$("#matricula_e2").value,//numero de matrícula
        //Area do ADM
        diretor:'Prof. Kátia Pedroso Silveiras',
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
        //Informações do  Estágio
        salario:$("#remumera2").value,//remuneração
        salario_ext:$("#salario_ex2").value,//remuneração escrita por extenso
        valor_aux:$("#valor_aux2").value,//valor do auxilio trasnporte
        valor_aux_ext:$("#valor_aux_ext2").value,//valor do auxilio trasnporte escrito por extenso
        duracao:$("#duracao2").value,//duração do estágio em horas
        duracao_ext:$("#duracao_ext2").value,//duração do estágio em horas por extenso
        data_ini:$("#data_ini2").value,//data de inicio
        data_ter:$("#data_ter2").value,//data de fim
        horas_sem:$("#horas_sem2").value,//quantidade de horas semanais
        horas_sem_ext:$("#horas_sem_ext").value,//quantidade de horas semanais por extenso
        horas_dia:$("#horas_dia2").value,//quantidade de horas diarias
        horas_dia_ext:$("#horas_dia_ext2").value,//quantidade de horas diarias por extenso
        supervisor:$("#supervisor2").value,//nome do supervisor
        coordenador:$("#coordenador2").value,//nome do coordenador
    }
    
    //Default
    if(typeof(dado.salario)==String){
        dado.salario=0
    }
    
    //Verifica se é remunerado ou não
    if(dado.salario==0){
        var bolsa=`O ESTAGIÁRIO não receberá qualquer valor a título de bolsa, nem qualquer outra forma de retribuição pecuniária.`
        var aux=``
        if(dado.valor_aux!=0){
            var aux=`
    Parágrafo Único - O ESTAGIÁRIO receberá, do CAMPO DE ESTÁGIO, auxílio-transporte, no
    valor de `+dado.valor_aux+`  (R$`+dado.valor_aux_ext+`)  (opcional)`
        }
    }else{
        var bolsa=`O CAMPO DE ESTÁGIO concederá ao ESTAGIÁRIO uma bolsa no valor de R$`+dado.salario+`
    (`+dado.salario_ext+`) que será paga mensalmente e terá por base de cálculo o número de horas
    efetivamente dedicadas às atividades de estágio curricular.`
        var aux=``
        if(dado.valor_aux!=0){
            var aux=`
    Parágrafo Único - Além da bolsa referida no caput, o ESTAGIÁRIO receberá, do CAMPO DE ESTÁGIO, auxílio-transporte, no
    valor de `+dado.valor_aux_ext+`(R$`+dado.valor_aux+`) (opcional)`
        }
    }

    //Geração do PDF

    var doc = new jsPDF()

    doc.setFont("Times New Roman","")//Fonte do texto
    doc.addImage(imagemData,'JPG',95,25,20,20)//Adiciona a imagem
    doc.setFontSize(14)//Tamanho da fonte

    doc.text(`UNIVERSIDADE FEDERAL DE MINAS GERAIS
                COLÉGIO TÉCNICO DA UFMG`, 55, 55,)

    doc.setFontSize(12)           

    doc.text("TERMO DE COMPROMISSO",80, 70)

    doc.setFontSize(9)           

    doc.text(`Termo de Compromisso que entre si celebram `+dado.contratante+ `o(a).(Pessoa
Jurídica).e o(a) estudante `+dado.estudante+`, com a interveniência da Universidade
Federal de Minas Gerais, para a realização de estágio curricular obrigatório.`,40, 75)

    doc.setFontSize(10)

    //Primeiro Texto principal
    doc.text(`O(A) `+dado.contratante+`, pessoa jurídica de direito (público/privado), inscrita no CNPJ sob o n°
    `+dado.cnpj+`, doravante denominado CAMPO DE ESTÁGIO, com sede na Rua
    `+dado.rua_empresa+`, n° `+dado.num_endereco_empresa+`, CEP n° `+dado.cep_empresa+`, Bairro `+dado.bairro_empresa+` , Município de
    `+dado.municipio_empresa+`, Estado de `+dado.estado_empresa+`, neste ato representado por, Sr. `+dado.representante+`
    CI n° `+dado.num_identidade_representante+`, CPF n°`+dado.cpf_representante+`, residente e
    domiciliado na Rua `+dado.rua_representante+`, n°`+dado.num_endereco_representante+`, CEP no `+dado.cep_representante+`,
    Bairro `+dado.bairro_representante+`, Município de `+dado.municipio_empresa+`, Estado de `+dado.estado_representante+` e, de outro lado,
    o(a) estudante `+dado.estudante+`, CI n° `+dado.num_identidade_estudante+`, CPF n° `+dado.cpf_estudante+`,
    residente e domiciliado na Rua `+dado.rua_estudante+`, n° `+dado.num_endereco_estudante+` CEP n° `+dado.cep_estudante+`,
    Bairro `+dado.bairro_estudante+`, Município de `+dado.municipio_estudante+` Estado de `+dado.estado_estudante+`, Telefone
    n° `+dado.tel_estudante+`, cursando o `+dado.ano+` ano do Curso
    Técnico de `+dado.curso+`, matrícula n°
    `+dado.curso+`, doravante denominado(a) ESTAGIÁRIO(A), acordam em firmar o presente Termo de Compromisso, com
    a interveniência e anuência da UNIVERSIDADE FEDERAL DE MINAS GERAIS, inscrita no CNPJ sob o no 17.217.985/0001-
    04, com sede na Avenida Presidente Antônio Carlos, no 6.627, CEP no 31270-901, Pampulha, Município de Belo Horizonte,
    Estado de Minas Gerais, doravante denominada UFMG, neste ato, por intermédio do Colégio Técnico da UFMG, sendo
    representada por seu(ua) Diretor(a),`+dado.diretor+`, CPF n° `+dado.cpf_diretor+`, Portaria de delegação de competência no
    `+dado.num_competencia+`, de `+dado.data+`, sujeitando-se os partícipes, ao disposto na Lei no 11.788/08, e nas demais disposições aplicáveis, mediante
    as cláusulas e condições seguintes:
    CLÁUSULA PRIMEIRA - Do Objeto
    Constitui objeto do presente Termo de Compromisso a formalização da relação entre o CAMPO DE ESTÁGIO e o(a)
    ESTAGIÁRIO(A), visando, unicamente, possibilitar a realização da atividade de estágio curricular obrigatório.
    Parágrafo único. Este Termo de Compromisso vincula-se para todos os efeitos legais ao Protocolo Estágio n° `+dado.num_protocolo+`,
    celebrado no dia `+dado.dia+` de `+dado.mes+`, de `+dado.ano+` .
    CLÁUSULA SEGUNDA - Do Planejamento, Acompanhamento e Execução.
    Para proporcionar a complementação do ensino e da aprendizagem em termos de treinamento prático, de aperfeiçoamento técnico-
    cultural, científico e de relacionamento humano, o estágio curricular, como procedimento didático-pedagógico planejado em
    conformidade com as especificidades do Curso, deverá ser acompanhado e executado de acordo com a programação estabelecida
    no Plano de Atividades, que será incorporado ao presente Termo, por meio de aditivos, à medida que for avaliado,
    progressivamente, o desempenho do ESTAGIÁRIO.
    CLÁUSULA TERCEIRA - Do Seguro
    O(A) ESTAGIÁRIO(A) estará segurado(a) contra riscos de acidentes pessoais pela Apólice de Seguro no `+dado.num_apolice+`, que a `+dado.nome_universidade+`
    mantém com a `+dado.seguradora+`.
    CLÁUSULA QUARTA - Do Vínculo Empregatício
    Nos termos do disposto no art. 3o, da Lei no 11.788/08, o estágio curricular não criará vínculo empregatício de qualquer natureza
    entre o(a) ESTAGIÁRIO(A), o CAMPO DE ESTÁGIO e a UFMG.
    CLÁUSULA QUINTA - Da Bolsa de Estágio
    `+bolsa+aux+`
    CLÁUSULA SEXTA - Do Prazo do Estágio
    Fica compromissado que o estágio curricular terá duração de `+dado.duracao+` (`+dado.duracao_ext+`) horas, tendo início em `+dado.data_ini+` e
    término em `+dado.data_ter+`.
    Parágrafo 1o O prazo de duração do estágio poderá ser prorrogado, mediante Termo Aditivo, não podendo, contudo, sua duração
    exceder a 04 (quatro) semestres letivos, exceto quando se tratar de ESTAGIÁRIO portador de deficiência). Parágrafo 2° Fica
    assegurado ao (a) ESTAGIÁRIO (A) que desenvolva estágio com duração igual ou superior a 1 (um) ano, recesso remunerado de`,12, 88)

    //Linha final da página
    doc.setFontSize(12)
    doc.text("1",195, 290)

    //Nova página
    doc.addPage()
    doc.setFontSize(10)


    doc.text(`30 (trinta) dias ou proporcional nos casos de estágio inferior a 1 (um) ano, preferencialmente no período de férias escolares. Esse
    recesso só será remunerado quando o (a) ESTAGIÁRIO (A) receber bolsa ou outra forma de contraprestação.
    CLÁUSULA SÉTIMA - Da Carga Horária da Jornada de Atividades
    O(A) ESTAGIÁRIO(A) deverá cumprir `+dado.horas_sem+` (`+dado.horas_sem_ext+`) horas de jornada de atividades de estágio curricular por semana,
    de segunda a sexta-feira, com carga de `+dado.horas_dia+` (`+dado.horas_dia_ext+`) horas por dia, em período compatível com o seu horário escolar, salvo
    o estágio realizado no período de férias, desde que previsto no projeto pedagógico do curso.
    Parágrafo único. A carga horária diária e semanal para a realização do estágio curricular poderá ser alterada, quando não
    prejudicar o horário escolar do (a) ESTAGIÁRIO(A), conforme as normas pertinentes e de acordo com a conveniência da UFMG
    e do CAMPO DE ESTÁGIO.
    CLÁUSULA OITAVA - Do Local e Horário do Estágio
    As atividades a serem cumpridas serão realizadas nas dependências do CAMPO DE ESTÁGIO e deverão ser desenvolvidas no(a)
    ( local ) , e, em conformidade com os termos da Cláusula Sétima,
    CLÁUSULA NONA – Supervisão, Acompanhamento e Avaliação
    I - Do CAMPO DE ESTÁGIO
    a) acompanhar e supervisionar o(a) ESTAGIÁRIO(A) na execução de atividades, no ambiente de trabalho, por intermédio do(a)
    Sr(a). `+dado.supervisor+`, Profissional de seu quadro de pessoal com a função de Supervisor de
    Estágio;
    b) proporcionar todas as oportunidades e condições necessárias para o pleno cumprimento das metas previstas no Plano de
    Atividades;
    c) enviar à UFMG, relatório de atividades, com periodicidade mínima de 06 (seis) meses, com vista obrigatória relatório ao
    ESTAGIÁRIO, manifestando sobre o desenvolvimento do estágio e o desempenho do ESTAGIÁRIO;
    d) emitir Certificado de Estágio Curricular e Ficha de Avaliação, que conterá os dados de identificação, o período da prestação da
    atividade de estágio curricular e a carga horária total.
    II – Do (a) ESTAGIÁRIO (A)
    a) manter conduta ética, obedecer às normas internas do CAMPO DE ESTÁGIO e preservar o sigilo das informações a que tiver
    acesso;
    b) cumprir as atividades programadas;
    c) elaborar, assinar e entregar relatórios de atividades a SIEE/Coltec, nos seguintes prazos; parcial(a cada 06 meses) e final.
    d) comunicar, de imediato e por escrito, a ocorrência de qualquer fato relevante relacionado à realização do estágio curricular e, da
    mesma forma, a interrupção, suspensão ou cancelamento de sua matrícula na UFMG.
    III – Da UFMG
    a) responsabilizar-se, para que a atividade de estágio curricular seja realizada como procedimento didático-pedagógico;
    b) coordenar e orientar, na qualidade de interveniente, por intermédio do Sr(a). Professor(a)
    `+dado.coordenador+`, servidor(a) de seu quadro de pessoal docente com a função de
    Orientador de Estágio, o desenvolvimento das atividades programadas e avaliar o rendimento do(a) ESTAGIÁRIO(A), com base
    em relatórios e parâmetros inerentes à formação escolar e à habilitação profissional;
    c) observar o cumprimento da legislação e demais disposições sobre o estágio curricular.
    CLÁUSULA DÉCIMA - Do Desligamento
    Ocorrerá o desligamento do(a) ESTAGIÁRIO (A):
    a) automaticamente, ao término do estágio curricular;
    b) a qualquer tempo, no interesse da Administração;
    c) após decorrida a terça parte do tempo previsto para a duração do estágio curricular, se comprovada a insuficiência na avaliação
    de desempenho no CAMPO DE ESTÁGIO ou na UFMG;
    d) a pedido do(a) ESTAGIÁRIO(A);
    e) em decorrência do descumprimento de qualquer compromisso assumido neste Termo de Compromisso;
    f) pelo não comparecimento, sem motivo justificado, por mais de 05 (cinco) dias, consecutivos ou não, no período de 01 (um)
    mês, ou por 30 (trinta) dias durante todo o período do estágio curricular;
    g) pela conclusão ou abandono do curso, trancamento de matrícula ou transferência para outra Instituição de Ensino;
    h) por conduta incompatível com a exigida pela administração do CAMPO DE ESTÁGIO.
    CLÁUSULA DÉCIMA PRIMEIRA - Do Foro
    Nos termos do inciso I, do art. 109, da Constituição Federal, o foro competente para dirimir dúvidas ou litígios decorrentes deste
    Instrumento é o da Justiça Federal, Seção Judiciária de Minas Gerais.
    E, por estarem de acordo, os partícipes firmam o presente Termo Compromisso, em 03 (três) vias de igual teor e forma, na
    presença das testemunhas abaixo identificadas.`,12,10)
    
    doc.text("Belo Horizonte, ......... de ......................... de 20........",120,230)

    doc.line(15, 245, 85, 245, "DF")
    doc.text("CAMPO DE ESTÁGIO",30,250)
    doc.line(110, 245, 180, 245, "DF")
    doc.text("ESTAGIÁRIO(A)",132,250)
    doc.text(`: ....................................................................
            Prof. Kátia Pedroso Silveira
                    Diretora do Coltec`,70,260)

    //Linha final da página
    doc.setFontSize(12)
    doc.text("2",195, 290)

    doc.save('TermoCompromissoForaUFMG.pdf')
    
}


