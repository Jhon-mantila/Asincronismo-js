//el yield te permite realizar un stop y los va llamando con next
function*  gen(){
    yield 1;
    yield 2;
    yield 3;
}

let g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterable(array){

    for(let value of array){
        yield value;
    }

}

const it = iterable(['jhon', 'daniela', 'maria', 'jessika']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
