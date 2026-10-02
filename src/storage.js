//Storage
const STORAGE_KEY = "formData";

//Carregar cadastro
export function carregarCadastros() {
    
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    return data;
    
}

//Salvar cadastro
export function salvarCadastro(cadastro) {
    
    const cadastros = carregarCadastros();
    cadastros.push(cadastro);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(cadastros)
    );
    
    console.log(cadastro);
}

export function ultimoCadastro(){
    
    const array = carregarCadastros();
    
    // Preenche o formulário com o último cadastro salvo
    if (STORAGE_KEY.length > 0) {

    const ultimoCadastro = array[array.length - 1];
    console.log("lastlast "+ ultimoCadastro);

    document.getElementById("name").value = ultimoCadastro.nome;
    document.getElementById("idade").value = ultimoCadastro.idade;
    document.getElementById("estadovoluntario").value = ultimoCadastro.estado;
    document.getElementById("trabalhos").value = ultimoCadastro.trabalho;

    }

}