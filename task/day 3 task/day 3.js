let obj1={
    name:"person1",
    age : 5
}


let obj2={
    age:5,
    name:"person1"
}


const samepropertyobjs=function(obj1,obj2)
{
    let obj1keys=Object.keys(obj1);

    if(obj1keys.length===Object.keys(obj2).length)
    {
        return obj1keys.every(key=>obj2.hasOwnProperty(key)&& obj2[key]===obj1[key]);
    };
    return false;
};

 console.log(samepropertyobjs(obj1,obj2));
