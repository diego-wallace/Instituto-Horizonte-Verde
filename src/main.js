import { renderizarCards } from "./cards.js";
import { carregarCadastros, ultimoCadastro, salvarCadastro } from "./storage.js";

//#region SPA
//div principal
const main = document.getElementById("idMain");



//#region Criando páginas
//Criando página inicial
const homePage = document.createElement('div');
homePage.setAttribute("class", "divPage");
homePage.innerHTML = `
        <div class="divMainTitle">

            <h1>Instituto Horizonte Verde</h1>

        </div>

            <div class="divSobre">

                <img class="imagem-principal" src="../assets/imagem-ong.jpg" alt="Duas mãos em formato de concha segurando uma quantia de terra e um broto de planta.">
                        
                <div class="divTextoSobre">
                        
                    <h3>Quem Somos?</h3>
                    <h4>O Instituto Horizonte Verde é uma ONG dedicada à promoção da educação ambiental, preservação da natureza e incentivo a práticas sustentáveis em comunidades urbanas.</h4> 

                </div>

            </div>

            <section class="secMissaoFeitos">
                <div class="divMissao">

                    <h3>Nossa Missão</h3>
                    <h4>Desenvolver projetos que contribuam para a construção de cidades mais verdes, conscientes e sustentáveis.</h4>

                </div>

                <div class="divFeitos">

                    <h3>Nossos Feitos</h3>
                    <ul>
                        <li>Mais de 5.000 árvores plantadas.</li>
                        <li>30 escolas atendidas por programas educativos.</li>
                        <li>15 hortas comunitárias criadas.</li>
                    </ul>
                
                </div>
            </section>

        <section class="secDepoimentos">

            <div class="divDepoimentos">

                <h2>Depoimentos</h2>
                <h4>Veja o que nossos voluntários e beneficiários têm a dizer sobre o impacto do Instituto Horizonte Verde em suas vidas e comunidades.</h4>
            
            </div>

            <div class="divArticle">
                
                <article class="artCard">
                
                    
                    <h3>Maria Oliveira</h3>
                    <h4>
                    "Participar dos projetos da ONG mudou minha visão sobre
                    sustentabilidade."
                    </h4>
                    
                </article>

                <article class="artCard">

                    <h3>Lucas Santos</h3>
                    <h4>
                    "A horta comunitária trouxe benefícios para todo o bairro."
                    </h4>

                </article>
                
                <article class="artCard">
                    
                    <h3>Ana Costa</h3>
                    <h4>
                    "Excelente trabalho de conscientização ambiental."
                    </h4>

                </article>

            </div>        
                
        </section>
    `;

//Criando página de projetos
const projectPage = document.createElement('div');
projectPage.setAttribute("class", "divPage");
projectPage.innerHTML = `
        <div class="divMainTitle">

            <h1>Nossos Projetos</h1>

        </div>
            
        <section id="secProjetos">
        


        </section>

        <section class="secTrabalhos">

            <h2>Trabalhos voluntários</h2>
            
            <div class="divTrabalhoCards">
                <div class="divComoSerVoluntario">
                
                    <h3>Como Participar como Voluntário</h3>
                    <h4> O Instituto Horizonte Verde acredita que a transformação social e ambiental acontece por meio da participação ativa da comunidade. Por isso, oferecemos diversas oportunidades para pessoas que desejam contribuir com seu tempo, habilidades e conhecimento. </h4>
                
                </div>

                <div class="divAreasVoluntario">

                    <h3>Áreas de Voluntariado</h3>
                    <ul>
                        <li>Plantio e manutenção de árvores em áreas urbanas.</li>
                        <li>Auxílio em oficinas e palestras de educação ambiental.</li>
                        <li>Suporte na criação e manutenção de hortas comunitárias.</li>
                    </ul>

                </div>

                <div class="divEtapasVoluntario">

                    <h3>Etapas para se Tornar Voluntário</h3>
                    <ol>
                        <li>Preencher o formulário de cadastro disponível no site.</li>
                        <li>Participar de uma reunião de apresentação da ONG.</li>
                        <li>Realizar um treinamento básico sobre sustentabilidade e cidadania.</li>
                        <li>Escolher uma área de atuação de acordo com seus interesses.</li>
                        <li>Participar das atividades e eventos promovidos pela organização.</li>
                    </ol>

                </div>

                <div class="divBeneficiosVoluntario">

                    <h3>Benefícios do Voluntariado</h3>
                    <ul>
                        <li>Certificado de participação em ações sociais.</li>
                        <li>Desenvolvimento de habilidades de liderança e trabalho em equipe.</li>
                        <li>Aprendizado sobre práticas sustentáveis.</li>
                        <li>Integração com pessoas comprometidas com mudanças positivas.</li>
                    </ul>
                </div>
            </div>
            
        </section>

        <section class="secCampanhas">

            <h2>Campanhas de Doação</h2>
            <h4> As campanhas de doação do Instituto Horizonte Verde são fundamentais para financiar projetos ambientais e sociais. Todas as arrecadações são destinadas à execução das ações desenvolvidas pela ONG. </h4>

            <div class="divCampanhas">
                
                <div class="divSobreCampanhas">
                    <h3>Como Funcionam as Campanhas</h3>
                    <ol>
                        <li>Identificação das necessidades dos projetos em andamento.</li>
                        <li>Definição de metas de arrecadação e cronograma.</li>
                        <li>Divulgação das campanhas em redes sociais, escolas e empresas parceiras.</li>
                    </ol>
                </div>
                <div class="divDoacoesCampanhas">
                    <h3>O Que Pode Ser Doado</h3>
                    <ul>
                        <li>Mudas de árvores e sementes.</li>
                        <li>Ferramentas para jardinagem.</li>
                        <li>Materiais recicláveis para oficinas educativas.</li>
                    </ul>
                </div>
                <div class="divTransparenciaCampanhas">
                    <h3>Transparência</h3>
                    <h4>
                    A ONG publica relatórios semestrais com informações sobre os valores
                    arrecadados, materiais recebidos e resultados obtidos. Dessa forma,
                    doadores e voluntários podem acompanhar o impacto gerado por suas
                    contribuições.
                    </h4>
                    </div>
                <div class="divResultadoCampanhas">
                    <h3>Resultados das Últimas Campanhas</h3>
                    <ul>
                        <li>R$ 85.000 arrecadados para projetos ambientais em 2025.</li>
                        <li>1.200 mudas distribuídas para comunidades e escolas.</li>
                        <li>500 kits de jardinagem entregues a voluntários.</li>
                        <li>8 novas hortas comunitárias implantadas com apoio de doadores.</li>
                    </ul>
                </div>
            </div>

        </section>

        <template id="templateProjects">
                <div class="divTemplate">

                    <h3 class="templateTitle"></h3>
                    <h4 class="templateText"></h4>
                    <img class="templateImage" src="" alt="">
                
                </div>
        </template>
    `;

//Criando página de projetos
const cadastroPage = document.createElement('div');
cadastroPage.setAttribute("class", "divPage");
cadastroPage.innerHTML = `
        <div class="divMainTitle">

            <h1>Cadastro</h1>

        </div>

        <div class="divAreaCadastro">

            <h4>Realize seu cadastro para nos ajudar com nossos própositos!</h4>
            
            <form id="idForm">

                <div class="divDadosPessoais">

                    <fieldset id="fieldsetInformacoesUsuario">

                        <legend>Dados pessoais</legend>

                            <div class="divInput">
                            
                                <label for="name">Nome completo:</label>
                                <input type="text" name="Nome Completo" id="name" placeholder="Nome Completo" title="Preencha com seu nome completo." minlength="3" required><br>
                                <small id="smallName">Nome inválido</small>
                                
                            </div>
                            

                            <div class="divInput">
                            
                                <label for="email">Email para contato:</label>
                                <input type="email" name="Email" id="email" placeholder="exemplo@email.com" title="Preencha com seu email. Exemplo: exemplo@email.com" required ><br>
                                <small id="smallEmail">Email inválido</small>

                            </div>

                            <div class="divInput">
                            
                                <label for="tel">Telefone para contato:</label>
                                <input type="tel" name="Telefone" id="tel" placeholder="00 00000-0000" title="Preencha com o telefone para contato. Formato: 00 0 0000-0000" pattern="\\(\\d{2}\\)\\s\\d{5}-\\d{4}" required ><br>
                                <small id="smallTel">Telefone inválido</small>

                            </div>

                            <div class="divInput">

                                <label for="cpf">Digite seu CPF:</label>
                                <input type="text" name="CPF" id="cpf" placeholder="000000000-00" title="Preencha com seu CPF. Formato: 000000000-00" pattern="\\d{9}-\\d{2}" required ><br>
                                <small id="smallcpf">CPF inválido</small>

                            </div>
                            
                            <div class="divInput">

                                <label for="date">Idade:</label>
                                <input type="number" name="Idade" id="idade" min="18" max="100" title="Preencha com sua idade" required ><br>
                                <small id="smallIdade">Idade inválida</small>

                            </div>

                            <div class="divInput">
                                <label for="cep">Digite seu CEP:</label>
                                <input type="text" name="CEP" id="cep" placeholder="00000-000" pattern="\\d{5}-\\d{3}" title="Preencha com o telefone para CEP. Formato: 00000-000" required ><br>
                                <small id="smallcep">CEP inválido</small>
                            </div>
                    </fieldset>

                </div>

                <div class="divTrabalhos">

                    <fieldset id="Trabalhos">

                        <legend>Trabalhos voluntários</legend>

                        <div class="divInput">

                            <label for="estadovoluntario">Onde deseja ser voluntário?</label>

                            <select name="Estado" id="estadovoluntario" required size="1" >

                                <option value="">----</option>
                                <option>Distrito Federal</option>
                                <option>Goiás</option>
                                <option>Tocantins</option>
                                <option>Mato Grosso</option>
                                <option>Minas Gerais</option>

                            </select><br>
                            <small id="smallestado">Selecione um estado</small>

                        </div>

                        <div class="divInput">

                            <label for="trabalhos">Com o que deseja nos ajudar?</label>
                            <select name="Trabalhos" id="trabalhos" required size="1" >

                                <option value="">----</option>
                                <option>Plantio de Árvores</option>
                                <option>Educação Ambiental</option>
                                <option>Hortas Comunitárias</option>
                                <option>Reciclagem</option>

                            </select><br>
                            <small id="smalltrabalhos">Selecione um trabalho</small>

                        </div>

                    </fieldset>

                </div>

                <div class="divButtons">
                    
                    <button id="btnSubmit" data-action="submit">Cadastrar-se</button>
                    <button id="btnClear" data-action="clear">Limpar</button>
                
                </div>
            </form>

        </div>

        <div class="divModalCadastro">

            <h3>Cadastro realizado com sucesso!</h3>
            <h4>Agradecemos a sua ajuda, entraremos em contato!</h4>
            <button>Voltar a página inicial</button>

        </div>

        <div class="divToast">

            <h3>Cadastro realizado com sucesso!</h3>

        </div>

        <div class="divBadges">

            <ul>

                <li class="badgePlantios">Plantio de Árvores</li>
                <li class="badgeEducacao">Educação Ambiental</li>
                <li class="badgeHortas">Hortas Comunitárias</li>
                <li class="badgeReciclagem">Reciclagem</li>


            </ul>

        </div>
    `;
//#endregion Páginas

//#region Roteamento
function router() {

    const path = window.location.hash;

    switch (path) {
        case "":

            main.innerHTML = ``;
            main.appendChild(homePage);

            break;

        case "#/":

            main.innerHTML = ``;
            main.appendChild(homePage);

            break;

        case "#/projetos":

            main.innerHTML = ``;
            main.appendChild(projectPage);
            renderizarCards();

            break;

        case "#/cadastro":

            main.innerHTML = ``;
            main.appendChild(cadastroPage);
            let b = carregarCadastros();
            let a = ultimoCadastro();
            console.log("ultimo "+a);
            console.log(b);
            

            break;

        default:
            main.innerHTML = `
                <h1>404</h1>
                <p>Página não encontrada.</p>
            `;
            
    }
    
}

//#endregion

//#region Interceptar clique de navegação
//interceptar clique
document.addEventListener("click", function(event) {
    const link = event.target.closest("[data-route]");

    if (!link) {
        return;
    }

    event.preventDefault();

    const path = link.getAttribute("href");

    history.pushState({}, "", path);

    router();
});
//#endregion

//atualizar página
window.addEventListener("popstate", router);
window.addEventListener("load", router);

//#endregion SPA

//#region Formulario
//Interceptar clique nos botões
document.addEventListener("click", function(event) {

    //formulario
    const form = document.getElementById("idForm");

    //Botão
    const button = event.target.closest("[data-action]");

    //Se não for um botão, retornar nada
    if (!button) {
        return;
    }

    //Interceptar a interatividade padrão
    event.preventDefault();

    //Ação de cada botão
    const action = button.dataset.action;

    //se o botão for o botão de limpar
    if(action === "clear"){
        
        //resetar formulário
        form.reset();

    }

    if(action === "submit" && form.checkValidity()){

        //Pegar os dados do formulário
        const dadosUsuario = {
            nome: document.getElementById("name").value,
            idade: document.getElementById("idade").value,
            estado: document.getElementById("estadovoluntario").value,
            trabalho: document.getElementById("trabalhos").value
        };

        //salvar dados
        salvarCadastro(dadosUsuario);

    }

});

//Verificação de inputs
document.addEventListener("input", function(){

    //input de nome
    const smallName = document.getElementById("smallName");
    smallName.textContent = "O nome precisa ter no mínimo 3 letras.";
    const nameInput = document.getElementById("name");

    //checando validez
    if(nameInput.checkValidity()){
        
        smallName.classList.remove("visible");

    }else{
        
        smallName.classList.add("visible");
    };

    ///////////////////////////////////////////
    //input de email
    const smallEmail = document.getElementById("smallEmail");
    const EmailInput = document.getElementById("email");
    
    //checando validez do email
    if(EmailInput.checkValidity()){
        
        smallEmail.classList.remove("visible");
    }else{
        
        smallEmail.classList.add("visible");
    };

    ///////////////////////////////////////////
    //input de telefone
    const smallTel = document.getElementById("smallTel");
    smallTel.textContent = "Padrão: 00 00000-0000";
    const TelInput = document.getElementById("tel");
    TelInput.pattern = "\\d{2}\\s\\d{5}-\\d{4}";
    
    //checando validez
    if(TelInput.checkValidity()){
        
        smallTel.classList.remove("visible");

    }else{
        
        smallTel.classList.add("visible");
    };

    ///////////////////////////////////////////
    //input de CPF
    const smallCpf = document.getElementById("smallcpf");
    smallCpf.textContent = "Padrão: 000000000-00";
    const cpfInput = document.getElementById("cpf");
    cpfInput.pattern = "\\d{9}-\\d{2}";
    
    //checando validez
    if(cpfInput.checkValidity()){
        
        smallCpf.classList.remove("visible");
    }else{
        
        smallCpf.classList.add("visible");
    };

    ///////////////////////////////////////////
    //input de Idade
    const smallIdade = document.getElementById("smallIdade");
    smallIdade.textContent = "Escolha sua idade.";
    const idadeInput = document.getElementById("idade");
    
    //checando validez
    if(idadeInput.checkValidity()){
        
        smallIdade.classList.remove("visible");
    }else{
        
        smallIdade.classList.add("visible");
    };
    
    ///////////////////////////////////////////
    //input de CEP
    const smallCEP = document.getElementById("smallcep");
    smallCEP.textContent = "Padrão: 00000-000";
    const cepInput = document.getElementById("cep");
    
    //checando validez
    if(cepInput.checkValidity()){
        
        smallCEP.classList.remove("visible");
    }else{
        
        smallCEP.classList.add("visible");
    };

    ///////////////////////////////////////////
    //input de CEP
    const smallEstado = document.getElementById("smallestado");
    const estadoInput = document.getElementById("estadovoluntario");
    
    //checando validez
    if(estadoInput.checkValidity()){
        
        smallEstado.classList.remove("visible");
    }else{
        
        smallEstado.classList.add("visible");
    };

    ///////////////////////////////////////////
    //input de CEP
    const smallTrabalho = document.getElementById("smalltrabalhos");
    const trabalhoInput = document.getElementById("trabalhos");
    
    //checando validez
    if(trabalhoInput.checkValidity()){
        
        smallTrabalho.classList.remove("visible");
    }else{
        
        smallTrabalho.classList.add("visible");
    };

});

//#endregion
