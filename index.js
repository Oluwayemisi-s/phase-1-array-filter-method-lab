// Code your solution here
const myDrivers = ["Ladd", "Jemma", "Shawnte", "Mistique", "Jemma", "Vik", "Jemma"]
const myDriversObject = [
    {name:"Ladd",hometown: "Ife"}, 
    {name:"Jemma", hometown: "Ife"}, 
    {name:"Shawnte", hometown: "Abk"}, 
    {name:"Mistique", hometown: "Ilesha"}, 
    {name:"Jemma", hometown: "Ife"}, 
    {name:"Vik", hometown: "Cali"}, 
    {name:"Jemma", hometown: "Ibadan"}]

function findMatching(array, string){
    let newArray = array.filter((element) => {
        if (element.toLowerCase() === string.toLowerCase())
            return element
    })
    return newArray
}

function fuzzyMatch(array, string){
    let newArray = array.filter(function (element){
        if (element.startsWith(string))
            return element
    })
    return newArray
}

function matchName(array, str){
    let newArray = array.filter(element => {
        if (element.name === str)
            return element
    })
    return newArray
}