// Vinícius da Silva Ribeiro
// Variáveis var, let e const
//---------------------------------------------
// Atribuição às variáveis:
// variável var: pode ser reatribuído valor para ela
var a = 20;
console.log('a = '+a);
a = 45;
console.log('a = '+a);
// variável let: pode ser reatribuído valor para ela
let b = 10;
console.log('b = '+b);
b = 5
console.log('b = '+b);
// variável const: erro ao tentar reatribuir
const c = 30;
console.log('c = '+c);
c = 99;
console.log('c = '+c);
//---------------------------------------------
// Diferenças de escopo
// Variável var:
if(true){
    var a = 15;
}
console.log('a = '+a);
// variável var: vazando para fora do escopo
for (var i = 0; i < 5; i++){
    console.log(`Dentro do escopo: ${i}`);
}
console.log(`Fora do escopo: ${i}`);
// Variável let: Erro - Variável não declarada
if(true){
    let a = 15;
}
console.log('a = '+a);
// Variável let: variável podendo ser acessada pois foi declarada em um escopo global
let a = 15;
if(true){
    console.log('a = '+a);
}
// Variável let: como se comporta quanto ao escopo
if(true){
    let a = 15;
    console.log('a = '+a)
    if(true){
        let a = 12;
        console.log('a = '+a)
    }
    console.log('a = '+a)
}
// Variável var: como se comporta quanto ao escopo
if(true){
    var a = 15;
    console.log('a = '+a)
    if(true){
        var a = 12;
        console.log('a = '+a)
    }
    console.log('a = '+a)
}
console.log('a = '+a)
// variável const: não podendo ser reatribuído
if(true){
    const a = 35;
    a = 50;
    console.log('a = '+a)
}
// variável const: ero, pois está tentando reatribuir um novo objeto para "a"
if(true){
    const a = {nome: "Vinícius"};
    a = {nome: "Pedro"};
    console.log(a);
}
// variável const: mudando propriedade do objeto
if(true){
    const a = {nome: "Vinícius"};
    a.nome = "Pedro";
    console.log(a);
}
