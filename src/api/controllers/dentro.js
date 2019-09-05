import  {imagemData}  from '../models/foto.js';//importação dos dados da imagem

export const dentro=function (){
    
    
    var dado={ 
        //Informações da Unidade
        unidade_ufmg:$("#unidade1").value,//nome da unidade
        cnpj_unidade:$("#cnpj1").value,
        rua_unidade:$("#rua1").value,//endereço da unidade
        num_endereco_unidade:$("#numero1").value,
        cep_unidade:$("#cep1").value,
        bairro_unidade:$("#bairro1").value,
        municipio_unidade:$("#municipio1").value,
        estado_unidade:$("#estado1").value,
        supervisor:$("#supervisor1").value,//nome do supervisor
        //Área do ADM
        num_poderes:"3.147",
        data_poderes:"22/05/2019",
        diretor:'Prof. Kátia Pedroso Silveira',
        cpf_diretor:"123456789-00",
        num_competencia:'6.607',
        data:'02/10/2018',
        num_apolice:"0674",
        nome_universidade:"UFMG",
        seguradora:"Segurador Gente Seguros SA.",
        //Informações do  Estudante
        esudante:$("#nome1").value,//nome do estudante
        num_identidade_estudante:$("#identidade1").value,
        cpf_estudante: $("#cpf1").value,
        rua_estudante:$("#rua_e1").value,//endereço do estudante
        num_endereco_estudante:$("#numero_e1").value,
        cep_estudante:$("#cep_e1").value,
        bairro_estudante:$("#bairro_e1").value,
        municipio_estudante:$("#municipio_e1").value,
        estado_estudante:$("#estado_e1").value,
        tel_estudante: $("#tel_e1").value,
        ano:$("#ano_e1").value,//1°,2° ou 3°
        curso:$("#curso_e1").value,
        matricula:$("#matricula_e1").value,//numero de matrícula
        //Informações do Estágio
        salario: $("#remumera1").value,//remuneração
        salario_ext: $("#salario_ext1").value,//remuneração escrita por extenso
        valor_aux: $("#valor_aux1").value,//valor do auxilio trasnporte
        valor_aux_ext: $("#valor_aux_ext1").value,//valor do auxilio trasnporte por extenso
        duracao: $("#duracao1").value,//duração do estágio em horas
        duracao_ext: $("#duracao_ext1").value,//duração do estágio em horas por extenso
        data_ini: $("#data_ini1").value,//data de inicio
        data_ter: $("#data_ter1").value,//data de fim
        horas_sem: $("#horas_sem1").value,//quantidade de horas semanais
        horas_sem_ext: $("#horas_sem_ext1").value,//quantidade de horas semanais por extenso
        horas_dia: $("#horas_dia1").value,//quantidade de horas diarias
        horas_dia_ext: $("#horas_dia_ext1").value,//quantidade de horas diarias por extenso
        supervisor: $("#supervisor1").value,//nome do supervisor
        coordenador: $("#coordenador1").value,//"nome do coordenador
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
    doc.addImage(imagemData,'JPG',95,25,20,20)//Adiciona imagem
    doc.setFontSize(14)//Tamanho da fonte

    doc.text(`UNIVERSIDADE FEDERAL DE MINAS GERAIS
                COLÉGIO TÉCNICO DA UFMG`, 55, 55,)

    doc.setFontSize(12)           

    doc.text("TERMO DE COMPROMISSO",80, 70)

    doc.setFontSize(9)           

    doc.text(`Termo de Compromisso que entre si celebram `+dado.unidade_ufmg+` (Unidade Órgão da
UFMG) .e o(a) estudante `+dado.esudante+` , com a interveniência da Universidade
Federal de Minas Gerais, para a realização  de estágio curricular obrigatório.`,40, 75)

    doc.setFontSize(10)

    //Primeiro Texto principal
    doc.text(`O(A) `+dado.unidade_ufmg+` , (Unidade Órgão da UFMG), inscrita no CNPJ sob o n°
    `+dado.cnpj_unidade+`, doravante denominado CAMPO DE ESTÁGIO, com sede na Rua
    `+dado.rua_unidade+`, n° `+dado.num_endereco_unidade+` , CEP n° `+dado.cep_unidade+` , Bairro `+dado.bairro_unidade+` , Município de
    `+dado.municipio_unidade+`, Estado de `+dado.estado_unidade+`, neste ato representado por seu Diretor(a).
    `+dado.supervisor+` Portaria de delegação de poderes n° `+dado.num_poderes+` de `+dado.data_poderes+` e, de outro
    lado, o(a) estudante `+dado.esudante+`, CI n° `+dado.num_identidade_estudante+`, CPF n°`+dado.cpf_estudante+`, residente e domiciliado na Rua `+dado.rua_estudante+` , n° `+dado.num_endereco_estudante+`
    CEP n° `+dado.cep_unidade+` , Bairro `+dado.bairro_estudante+` , Município de `+dado.municipio_estudante+` Estado de `+dado.estado_estudante+` , Telefone
    n° `+dado.tel_estudante+` , cursando o `+dado.ano+` ano do Curso
    Técnico de `+dado.curso+` , matrícula n°
    `+dado.matricula+` , doravante denominado(a) ESTAGIÁRIO(A), acordam em firmar o presente Termo de Compromisso, com
    a interveniência e anuência da UNIVERSIDADE FEDERAL DE MINAS GERAIS, inscrita no CNPJ sob o no 17.217.985/0001-
    04, com sede na Avenida Presidente Antônio Carlos, no 6.627, CEP no 31270-901, Pampulha, Município de Belo Horizonte,
    Estado de Minas Gerais, doravante denominada UFMG, neste ato, por intermédio do Colégio Técnico da UFMG, sendo
    representada por sua Diretor(a), `+dado.diretor+`, CPF no `+dado.cpf_diretor+`, Portaria de delegação de competência no
    `+dado.num_competencia+`, de `+dado.data+`, sujeitando-se os partícipes, ao disposto na Lei no 11.788/08, e nas demais disposições aplicáveis, mediante
    as cláusulas e condições seguintes:
    CLÁUSULA PRIMEIRA - Do Objeto
    Constitui objeto do presente Termo de Compromisso a formalização da relação entre o CAMPO DE ESTÁGIO e o(a)
    ESTAGIÁRIO(A), visando, unicamente, possibilitar a realização da atividade de estágio curricular obrigatório.
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
    Nos termos do disposto no art. 3°, da Lei no 11.788/08, o estágio curricular não criará vínculo empregatício de qualquer natureza
    entre o(a) ESTAGIÁRIO(A), o CAMPO DE ESTÁGIO e a UFMG.
    CLÁUSULA QUINTA - Da Bolsa de Estágio
    `+bolsa+aux+`
    CLÁUSULA SEXTA - Do Prazo do Estágio
    Fica compromissado que o estágio curricular terá duração de `+dado.duracao+` ( `+dado.duracao_ext+` ) horas, tendo início em `+dado.data_ini+` e
    término em `+dado.data_ter+` .
    Parágrafo 1° O prazo de duração do estágio poderá ser prorrogado, mediante Termo Aditivo, não podendo, contudo, sua duração
    exceder a 04 (quatro) semestres letivos, exceto quando se tratar de ESTAGIÁRIO portador de deficiência). Parágrafo 2° Fica
    assegurado ao (a) ESTAGIÁRIO (A) que desenvolva estágio com duração igual ou superior a 1 (um) ano, recesso remunerado de
    30 (trinta) dias ou proporcional nos casos de estágio inferior a 1 (um) ano, preferencialmente no período de férias escolares. Esse
    recesso só será remunerado quando o (a) ESTAGIÁRIO (A) receber bolsa ou outra forma de contraprestação.
    CLÁUSULA SÉTIMA - Da Carga Horária da Jornada de Atividades`,12, 88)

    //Linha final da página
    doc.setFontSize(12)
    doc.text("1",195, 290)

    //Nova página
    doc.addPage()
    doc.setFontSize(10)
    doc.text(`O(A) ESTAGIÁRIO(A) deverá cumprir `+dado.horas_sem+` (`+dado.horas_sem_ext+`) horas de jornada de atividades de estágio curricular p or semana,
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
    b)coordenar e orientar, na qualidade de interveniente, por intermédio do Sr(a). Professor(a)
    `+dado.coordenador+` , servidor(a) de seu quadro de pessoal docente com a função de
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
    
    doc.text("Belo Horizonte, ......... de ......................... de 20........",120,220)

    doc.line(15, 235, 85, 235, "DF")
    doc.text("DIRETOR UNIDADE CAMPO DE ESTÁGIO",16,240)
    doc.line(110, 235, 180, 235, "DF")
    doc.text("ESTAGIÁRIO(A)",132,240)
    doc.text(`: ....................................................................
            Prof. Kátia Pedroso Silveira
                    Diretora do Coltec`,70,260)

    //Linha final da página
    doc.setFontSize(12)
    doc.text("2",195, 290)

    doc.save('TermoCompromissoDentroUFMG.pdf')
    
}


