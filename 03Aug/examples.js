// Javascript loads functions in to memory first, meaning that function can be written anywhere.
// The const must be defined before it can be called. 


function getRandonNumber(n) {
    return Math.floor(Math.random() * n)
}


const getRandonNumber(n) {
    return Math.floor(Math.random() * n)
}