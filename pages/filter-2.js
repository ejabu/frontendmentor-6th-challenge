import React from 'react'
// import filtering from '../tools/filtering'

export default function filter() {
    const criteria = ['good', "red"]
    const cars = [
        {
            brand: "Toyota",
            tags: ["good", "red"]
        },
        {
            brand: "Mitsubishi",
            tags: ["new", "blue"]
        },
        {
            brand: "Kwitang",
            tags: ["ugly", "old"]
        },
        {
            brand: "Chevy",
            tags: ["young", "red"]
        },
        {
            brand: "Subaru",
            tags: ["good", "white"]
        },
    ]

    // const filtered = filtering(criteria)

    // const result = cars.filter((car) => {
    //         return Object.keys(filtered).every(i => {
    //             return filtered[i] === car[i]
    //         });
    //         })


    let arr1 = [{id: 1,name: 'jhon'},{id: 2,name: 'max'},{id: 3,name: 'fer'}]
    let arr2 = [1, 2, 3, 4, 5];

    let xxx = cars.filter(car => criteria.find(x => x === car.tags));

    // const intersection = arr1.filter(element => array2.includes(element));


    var array1  = [1, 2, 3, 4, 5, 6];
    var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var array3 = cars.filter(function(obj) { 
        return criteria.indexOf(obj) == -1; 
    });

    console.log(array3);

    var people = [
        {
            name: 'john',
            age: 10,
            gender: 'm'
        },
        {
            name: 'joseph',
            age: 12,
            gender: 'm'
        },
        {
            name: 'annie',
            age: 8,
            gender: 'f'
        }
    ]
    var filters = {
        gender: 'f',
        name: 'annie'
    }
    
    var out = people.filter(person => {
        return Object.keys(filters).every(filter => {
            return filters[filter] === person[filter]
        });
    })
    
    
    console.log(out)

    ///////////////////////////////////////////////////////

    return (
        <div className="container-1280">
            {/* {filtered.map((item) => <h1>{item}</h1>)} */}
            tes
        </div>
    )
}
