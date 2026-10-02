//#region criar Cards
//conteúdos dos cards de projeto
const projects = [

    {
        title:"Plantando o Futuro",
        text:"Projeto voltado ao plantio de árvores em áreas urbanas e recuperação de espaços degradados.",
        image:"../assets/plantio.jpg",
        alt:"Duas mãos mexendo a terra envolta de um broto."
    },

    {
        title:"Escola Sustentável",
        text:"Programa educacional que leva palestras e oficinas sobre sustentabilidade para escolas públicas.",
        image:"../assets/escola-sustentavel.jpg",
        alt:"Crianças regando plantas."
    },

    {
        title:"Hortas Comunitárias",
        text:"Criação e manutenção de hortas em bairros para incentivo à alimentação saudável e integração da comunidade.",
        image:"../assets/hortas-comunitarias.jpg",
        alt:"Imagem de uma horta com pessoas tocando as plantas."
    },

    {
        title:"Recicla Mais",
        text:"Campanha de conscientização e coleta seletiva em comunidades.",
        image:"../assets/reciclagem.jpg",
        alt:"Um homem carregando uma caixa com símbolo de reciclagem cheia de garrafas."
    }

]

//função para clonar os projetos
export function clonarProjetos(project) {
    
    //selecionar o template
    const templateProjects = document.getElementById("templateProjects");

    //clonar o template
    const cloneTemplate = templateProjects.content.cloneNode(true);

    //preencher o template com os dados do projeto
    cloneTemplate.querySelector(".templateTitle").textContent = project.title;
    cloneTemplate.querySelector(".templateText").textContent = project.text;
    cloneTemplate.querySelector(".templateImage").src = project.image;
    cloneTemplate.querySelector(".templateImage").alt = project.alt;

    return cloneTemplate;

}

//função para exportar projetos
export function renderizarCards() {

    const sectionProjects = document.getElementById("secProjetos");
    sectionProjects.innerHTML = "";


    projects.forEach(project => {

        const card = clonarProjetos(project);
        sectionProjects.appendChild(card);

    });

}