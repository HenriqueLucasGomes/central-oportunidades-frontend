import  {imagemData}  from '../models/foto.js';//importação dos dados da imagem

export const protocolo= function (n){
    
    var dado={
        //Área de ADM
        num1:'55555',
        num2:'333',
        diretor:'Prof. Kátia Pedroso Silveira',
        num_competencia:'6.607',
        data:'02/10/2018',
        //Informações do Contratante
        contratante: $("#unidade"+n).value,//nome do contratante
        cnpj:$("#cnpj"+n).value,
        rua:$("#rua"+n).value,
        num_endereco:$("#numero"+n).value,//endereço do contratante
        cep:$("#cep"+n).value,
        bairro:$("#bairro"+n).value,
        municipio:$("#municipio"+n).value,
        estado:$("#estado"+n).value
    }   
    
    //Geração do PDF
    var doc = new jsPDF()
   
    // doc.fromHTML(document.getElementById('html'))



    doc.setFont("Times New Roman","")//Fonte do texto
    doc.addImage(imagemData,'JPG',95,25,20,20)//Adiciona imagem
    doc.setFontSize(12)//Tamanho da fonte

    doc.text('UNIVERSIDADE FEDERAL DE MINAS GERAIS\n  PROTOCOLO DE ESTÁGIO Nº '+dado.num1+'/'+dado.num2, 60, 55,)

    doc.setFontSize(9)           

    doc.text("Protocolo que entre si celebram a Universidade Federal de Minas Gerais, por meio do Colégio Técnico\ne a  concedente do estágio "+dado.contratante+", para a realização de estágio.",64, 66)

    doc.setFontSize(10)

    //Primeiro Texto principal
    doc.text(`A UNIVERSIDADE FEDERAL DE MINAS GERAIS, pessoa jurídica de direito público, inscrita no CNPJ sob o nº\n17.217.985/0001-04, doravante denominada UFMG, com sede na Avenida Presidente Antônio Carlos, nº 6.627, CEP nº 31270-\n901, Pampulha, Município de Belo Horizonte, Estado de Minas Gerais, por meio do Colégio Técnico, neste ato representado por\nseu(ua) Diretor(a), `+dado.diretor+`, brasileiro, conforme portaria de delegação de competência nº `+dado.num_competencia+' de '+dado.data+', e,\nde outro lado, o(a) '+dado.contratante+`, pessoa jurídica de direito\n(público/privado), inscrita no CNPJ sob o nº `+dado.cnpj+`, doravante denominado(a) CAMPO DE\n ESTÁGIO, com sede na (Rua/Avenida) `+dado.rua+' nº '+dado.num_endereco+', CEP\nnº '+dado.cep+', Bairro '+dado.bairro+', Município de '+dado.municipio+', Estado de '+dado.estado+`,\nsujeitando-se os partícipes, ao disposto na Lei nº 11.788/08, e nas demais disposições aplicáveis, mediante as cláusulas e\ncondições seguintes:
CLÁUSULA PRIMEIRA - Do Objeto
Constitui objeto do presente Protocolo a parceria entre a UFMG e o CAMPO DE ESTÁGIO, visando estabelecer as condições\npara propiciar estágio obrigatório aos estudantes matriculados no(s) Curso(s) Técnicos do Colégio Técnico da UFMG.
Parágrafo único. Para alcançar o objeto ora pactuado, os partícipes cumprirão o anexo plano de atividades elaborado de acordo\ncom o estabelecido no § 1º do art. 116 da Lei nº 8.666/93, no que couber e, ainda, em conformidade com as especificidades do\ncurso.       
CLÁUSULA SEGUNDA – Do Termo de Compromisso
A concessão do estágio tornar-se-á efetiva mediante a celebração de Termo de Compromisso entre o CAMPO DE ESTÁGIO\ne o ESTUDANTE, doravante denominado ESTAGIÁRIO, com a interveniência obrigatória da UFMG, cujos termos deverão ser\nestabelecidos em conformidade com o disposto no presente instrumento, na legislação e normas vigentes.
CLÁUSULA TERCEIRA – Dos Compromissos
Para a execução do objeto do presente Instrumento, caberá:`,12, 78)

//Segundo texto principal com distanciamento da margem
        doc.text(
        `        I - Ao CAMPO DE ESTÁGIO:
        a) informar à UFMG as oportunidades de estágios e as quantidades de vagas ofertadas;
        b) solicitar a indicação de ESTAGIÁRIO, mencionando o curso ou a área de atuação ou de formação do conhecimento;
        c) indicar funcionário do seu quadro de pessoal, com formação ou experiência profissional na área de conhecimento\n        desenvolvida no curso do estagiário, podendo este orientar e supervisionar até 10(dez) estagiários simultaneamente;
        d) assinar, na qualidade de concedente, o Termo de Compromisso de estágio, zelando pelo seu fiel cumprimento;
        e) permitir o início das atividades de estágio somente após a assinatura do Termo de Compromisso pelos partícipes, pelo\n        ESTAGIÁRIO e também pelo seu representante ou assistene legal, quando ele for absoluta ou relativamente incapaz;
        f) propiciar ao ESTAGIÁRIO as oportunidades e condições para vivenciar o aprendizado e adquirir experiências práticas\n        na linha de sua formação;
        g) exigir do ESTAGIÁRIO a execução das atividades programadas;
        h) encaminhar à UFMG a avaliação e a freqüência do ESTAGIÁRIO, assinados pelo Supervisor de Estágio;
        i) comunicar à UFMG, imediatamente, por escrito, a ocorrência de qualquer ato ou fato relevante concernente à\n         realização do estágio;
        j)  avaliar os resultados do presente Protocolo e sugerir as alterações julgadas necessárias.
        l) contratar em favor do estagiário seguro contra acidentes pessoais;
        m) por ocasião do desligamento do estagiário, entregar termo de realização do estágio com indicação resumida das\n        atividades desenvolvidas, dos períodos e da avaliação de desempenho.
        n) enviar a UFMG, com periodicidade mínima de 06(seis) meses, relatório de atividades, com vista obrigatória ao\n        ESTAGIÁRIO.
        II - À UFMG:
        a) divulgar as oportunidades de estágios e as quantidades de vagas ofertadas pelo CAMPO DE ESTÁGIO;
        b) encaminhar o ESTAGIÁRIO ao CAMPO DE ESTÁGIO, observando a compatibilidade do currículo de seu curso com\n        os requisitos necessários para o preenchimento da vaga ofertada;
        c) prestar informações referentes ao currículo e carga horária do curso, bem como, no início do período letivo, as datas de\n        realização de avaliações escolares ou acadêmicas;
        d) coordenar as ações relativas ao estágio;
        e) orientar e avaliar as atividades inerentes ao estágio, desenvolvidas pelo ESTAGIÁRIO;
        f)indicar professor do seu quadro de pessoal, da área a ser desenvolvida no estágio, para atuar como Orientador de\n        Estágio, sendo este responsável pelo acompanhamento e avaliação das atividades do ESTAGIÁRIO;
        `,17, 167)

        //Linha final da página
        doc.line(180, 290, 20, 290, "DF")
        doc.setFontSize(10)
        doc.text("1",195, 290)
        doc.setFontSize(10)
        doc.text("Minuta elaborada pela Procuradoria Jurídica da UFMG.",20,293)

        //Nova página
        doc.addPage()
        doc.setFontSize(10)
        doc.text(`        g) assinar Termo de Compromisso, na qualidade de interveniente, zelando pelo seu fiel cumprimento e reorientando o\n        ESTAGIÁRIO para outro local em caso de descumprimento de suas normas;
        h) comunicar ao CAMPO DE ESTÁGIO, de imediato e por escrito, o desligamento do ESTAGIÁRIO de seu curso;
        i) avaliar os resultados do presente Protocolo e sugerir as alterações julgadas necessárias
        j) exigir do ESTAGIÁRIO a apresentação periódica, em prazo não superior a 06(seis) meses, de relatório das atividades.`,17,10)
        
        //Terceiro texto principal
        doc.text(
        `
    CLÁUSULA QUARTA - Da Jornada de Atividades
    A jornada de atividades do estágio deverá ser de no máximo 30 horas semanais, de segunda a sexta-feira, devendo o\n    ESTAGIÁRIO cumprir 06 horas por dia, em período compatível com o seu horário escolar, sendo a ele assegurado, sempre que o\n    estágio tenha duração igual ou superior a 01 (um) ano, período de recesso de 30 (trinta) dias, a ser gozado\n    preferencialmente durantes suas férias escolares. 
    § 1º. O recesso deverá ser remunerado quando o estagiário receber bolsa ou outra forma de contraprestação;
    § 2°. Os dias de recesso serão concedidos de maneira proporcional nos casos em que o estágio tiver duração inferior a 01 (um)\n    ano;
    § 3º. A carga horária da jornada de atividades de estágio, que deverá ser explicitada no Termo de Compromisso, poderá ser\n    alterada, quando não prejudicar o horário escolar do ESTAGIÁRIO, nos termos da legislação e demais normas vigentes e de\n    acordo com a conveniência da UFMG e do CAMPO DE ESTÁGIO.  
    CLÁUSULA QUINTA - Do Prazo de Estágio
    O estágio será por prazo determinado, com duração não inferior a 320 horas e não superior a 04 (quatro) semestres letivos,\n    devendo constar no Termo de Compromisso o período de sua duração, a data de seu início e término.  
    CLÁUSULA SEXTA - Da Bolsa de botao.addEventListener('click',Estágio
    O ESTAGIÁRIO poderá conceder botao.addEventListener('click',ao ESTAGIÁRIO, mensalmente, uma bolsa, cujo valor será acordado e explicitado no Termo\n    de Compromisso.
    Parágrafo Único – Além da bolsa referida no caput, o ESTAGIÁRIO receberá, do CAMPO DE ESTÁGIO, o auxílio-transporte,\n    no   valor que será acordado e explicitado no Termo de Compromisso. (Esse parágrafo só deverá ser incluído, e obrigatoriamente,\n    na hipótese de estágios não obrigatórios
    CLÁUSULA SÉTIMA - Do Seguro
    Para a realização do estágio, caberá ao Coltec o ônus e a responsabilidade de providenciar a contratação e manutenção de seguro\n    de acidentes pessoais, cuja apólice seja compatível com valores de mercado, de caráter obrigatório, em favor do ESTAGIÁRIO,\n    devendo constar no Termo de Compromisso: o número da Apólice de Seguro e a Razão Social da Seguradora.
    (A contratação desse seguro só poderá caber a UFMG no caso de estágios obrigatórios).
    CLÁUSULA OITAVA - Da Inexistência de Vínculo Empregatício
    Nos termos do disposto no art. 3º da Lei nº 11.788/08, o estágio objeto do presente instrumento não cria vínculo empregatício de\n    qualquer natureza entre o ESTAGIÁRIO, o CAMPO DE ESTÁGIO e a UFMG.   
    CLÁUSULA NONA - Da Denúncia/Rescisão
    Este Protocolo poderá ser denunciado pelos partícipes, a qualquer tempo, desde que haja comunicação prévia de, no mínimo, 30\n    dias, ou rescindido no caso de descumprimento de qualquer uma de suas cláusulas ou condições.
    CLÁUSULA DEZ - Da Vigência e das Alterações
    O presente Instrumento terá vigência de 02 anos, a contar da data de sua assinatura, podendo ser prorrogado e/ou alterado, com\n    exceção de seu objeto, por acordo entre os partícipes, mediante Termo Aditivo. 
    CLÁUSULA  ONZE - Da Publicidade
    Caberá à UFMG providenciar a publicação do extrato do presente Protocolo na página eletrônica da Pró-Reitoria de Graduação da\n    UFMG e caberá ao CAMPO DE ESTÁGIO providenciar a publicação do extrato do presente Protocolo na Imprensa Oficial, no\n    prazo estabelecido no parágrafo único, art. 61, da Lei nº 8.666/93.  
    CLÁUSULA DOZE - Do Foro
    Nos termos do inciso I, do art. 109, da Constituição Federal, o foro competente para dirimir dúvidas ou litígios decorrentes deste\n    Instrumento é o da Justiça Federal, Seção Judiciária de Minas Gerais.
    E, por estarem de acordo, os partícipes firmam o presente Protocolo em 02 (duas) vias de igual teor e forma, na presença das\n    testemunhas abaixo.`,12, 26)
    
    //Datas
    doc.text("Belo Horizonte, .......... de  ............................  de 20.......",50,210)

    //Asinaturas
    doc.line(30, 235, 90, 235, "DF")
    doc.text("Diretor(a) do Coltec",44,240)
    doc.line(110, 235, 170, 235, "DF")
    doc.text("CAMPO DE ESTÁGIO",123,240)

    //Linha final da página
    doc.line(180, 290, 20, 290, "DF")
    doc.setFontSize(10)
    doc.text("2",195, 290)
    doc.setFontSize(9)
    doc.text("Minuta elaborada pela Procuradoria Jurídica da UFMG.",20,293)

    doc.save('protocolo.pdf')

}


