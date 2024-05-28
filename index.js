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
    let table_size = 5;
    let bingo_numbers = getBingoNumbers(table_size);

    let table = document.createElement("table");
    let t_head = document.createElement("thead");
    table.appendChild(t_head);
    let t_body = document.createElement("tbody");
    table.appendChild(t_body);
    let th_name = document.createElement("th");
    th_name.innerHTML = prompt('Qual o seu nome?');
    th_name.colSpan = table_size;
    t_body.appendChild(th_name);
    let tr_letter = document.createElement("tr");
    let letters = ['B', 'I', 'N', 'G', 'O'];
    for (let i = 0; i < table_size; i++) {
        let td_letter = document.createElement("td");
        td_letter.innerHTML = letters[i];
        tr_letter.appendChild(td_letter);
    }
    t_body.appendChild(tr_letter);
    for (let i = 0; i < table_size; i++) {
        let tr_number = document.createElement("tr");
        for (let j = 0; j < table_size; j++) {
            let td_number = document.createElement("td");
            td_number.innerHTML = bingo_numbers[j][i];
            tr_number.appendChild(td_number);
        }
        t_body.appendChild(tr_number);
    }
    document.body.appendChild(table);
}

function getBingoNumbers(size) {
    let possible_numbers = [];
    let rule_n = 1;
    let increment = 15;
    for (let i = 0; i < size; i++) {
        possible_numbers[i] = populateCategory(rule_n, rule_n + increment, size);
        rule_n += increment;
    }
    // alert(possible_numbers); DEBUG
    return possible_numbers;
}

function populateCategory(min, max, repeat_n) {
    let category = [];
    let repeat_numbers = [];
    for (let i = 0; i < repeat_n; i ++) {
        let new_number = getUniqueNumberInRange(min, max, repeat_numbers);
        category[i] = new_number;
        repeat_numbers.push(new_number);
    }
    return category;
}

function getUniqueNumberInRange(min, max, repeat_list) {
    let unique_number = Math.floor(Math.random() * (max - min) + min); //min is inclusive, max is exclusive!
    if(repeat_list.includes(unique_number)) {
        unique_number = getUniqueNumberInRange(min, max, repeat_list);
    }
    return unique_number;
}