// Write your solution in this file!

const employee = {
    name: "Jayco",
    streeAddress: "413 Pork",
    city: "Neward",
    zipcode: "95101",
}


function updateEmployeeWithKeyAndValue(obj, key, value) {
    return { ...obj, [key]: value, };
}


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]=value;
    return obj
}

function deleteFromEmployeeByKey(obj,key){
    return {...obj[key]};
}

function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key];
    return obj;
}