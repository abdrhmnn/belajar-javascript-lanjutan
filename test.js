let nama = 'abdu'
function sayHello(){
    let data = 21
    return `Hello ${nama}, ${data}`
}

console.log(sayHello())

function filterBy(type, ...values){
    return values.map(value => {
        if(typeof value === type){
            return value;
        }
    })

    // return values.filter(value => typeof value === type)
}

console.log(filterBy('number', 1, 2, 'abdu', true, 100, 'rahman', false, 20));

const arr4 = ['abdu', 'rahman', 'umji']
function descArr(arr4){
    return `Halo ${arr4}`
}

console.log(descArr(arr4))

// const coba = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('selesai')
//     }, 2000)
// }).then(response => console.log(response))

// console.log(coba);

function cobaPromise(){
    return new Promise((resolve, reject) => {
        const waktu = 5000
        if ( waktu < 5000){
            setTimeout(() => {
                resolve('selesai')
            }, 2000)
        }else{
            reject('kelamaan')
        }
    })    
}

async function cobaAsync(){

    try{
        const coba = await cobaPromise()
        console.log(coba);
    }catch(err){
        console.error(err);
    }
}

cobaAsync()