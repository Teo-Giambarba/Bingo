/*
Fazer um progama que siga as regras das cartelas do bingo, e distribua os números de forma aleatória entre cada espaço da cartela

O layout vai ficar mais ou menos assim

      Nome
 B  I  N  G  O
 X  X  X  X  X
 X  X  X  X  X
 X  X  X  X  X
 X  X  X  X  X
 X  X  X  X  X
 
 1 Coluna números de 01 a 15
 2 Coluna números de 16 a 30
 3 Coluna números de 31 a 45
 4 Coluna números de 46 a 60
 5 Coluna números de 61 a 75

Algoritimo:
- Criar uma lista com todos os números possíveis (1 a 75)
- Criar a Tabela
    Criar a table
    Criar a thead
    Criar a tbody
    Criar o th com o nome do jogador
    Criar o tr que vai segurar as letras bingo
    Criar um td para cada letra
    Criar uma lista de números disponíveis
    Escolher 5 números de cada categoria e criar uma lista para eles
    Repetir o ultimo passo 5 vezes (para cada categoria)
    Criar um tr genérico
        Criar um td genérico e inserir o numero de acordo com sua categoria
        Aumentar a categoria em 1
        Repetir os dois ultimos passo 5 vezes
    Repetir o ultimo passo 5 vezes
- Inserir a Tabela no DOM

*/

function createTable() {
    defineTableProperties();

}

function defineTableProperties() {
    let table_size = 5;
    let B_low = 1, B_max = 16;
    let B_numbers = populateCategory(B_low, B_max, table_size);
    let I_low = 16, I_max = 31;
    let I_numbers = populateCategory(I_low, I_max, table_size);
    let N_low = 31, N_max = 46;
    let N_numbers = populateCategory(N_low, N_max, table_size);
    let G_low = 46, G_max = 61;
    let G_numbers = populateCategory(G_low, G_max, table_size);
    let O_low = 61, O_max = 76;
    let O_numbers = populateCategory(O_low, O_max, table_size);
    alert(O_numbers);
}

function populateCategory(min, max, repeat_n) {
    let category = [];
    let repeat_numbers = [];
    for (let i = 0; i < repeat_n; i ++) {
        let new_number = getUniqueNumberInRange(min, max, repeat_numbers);
        category[i] = new_number;
    }
    return category;
}

function getUniqueNumberInRange(min, max, repeat_list) {
    let unique_number = Math.floor(Math.random() * (max - min) + min); //min is inclusive, max is exclusive!
    if(unique_number in repeat_list) {
        unique_number = getUniqueNumberInRange(min, max, repeat_list);
    }
    return unique_number;
}