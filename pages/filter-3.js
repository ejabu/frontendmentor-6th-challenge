import React from 'react'

export default function filterTiga() {
    const criteria = ["good"]
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

    function search(items, constraints) {
        return items.filter(item =>
            constraints.every(constraint => 
                item.tags.some(obj => obj === constraint)
            )
        );
    }
    
    // const items = [
    //     { title: 'prod1', tags: [{ value: 'green' }, { value: 'big' }] },
    //     { title: 'prod2', tags: [{ value: 'blue' }, { value: 'small' }] },
    //     { title: 'prod3', tags: [{ value: 'yellow' }, { value: 'medium' }, { value: 'big' }] },
    //     { title: 'prod4', tags: [{ value: 'green' }, { value: 'big' }, { value: 'medium' }] },
    // ];
    
    console.log(search(cars, criteria));

    return (
        <div>
            <h1>Hellow</h1>
        </div>
    )
}
