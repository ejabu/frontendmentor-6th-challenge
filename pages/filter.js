import React from 'react'

export default function filter() {
    const criteria = ['good']
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
            tags: ["young", "old"]
        },
        {
            brand: "Subaru",
            tags: ["good", "white"]
        },
    ]

    const findCar = cars.filter(item => criteria.every(val => item.tags.indexOf(val) > -1))
    

    console.log(findCar)

    ///////////////////////////////////////////////////////

    const filters = ['a', 'b'];

    const results = [
    {
        name: 'Result 1',
        category: ['a']
    },
    {
        name: 'Result 2',
        category: ['a', 'b']
    },
    {
        name: 'Result 3',
        category: ['c', 'a', 'b', 'd']
    }
    ];

    const filteredResults = results.filter(item =>
    filters.every(val => item.category.indexOf(val) > -1)
    );

    console.log(filteredResults);
    
    return (
        <div className="container-1280">
            {/* {filtered.map((item) => <h1>{item}</h1>)} */}
            tes
        </div>
    )
}
