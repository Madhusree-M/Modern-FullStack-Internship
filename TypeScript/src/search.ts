const items = [
    {
        id: 1,
        name: 'Dosa',
        price: 70
    },
    {
        id: 2,
        name: 'Idli',
        price: 20
    },
    {
        id: 3,
        name: 'Chicken Biriyani',
        price: 170
    },
    {
        id: 4,
        name: 'Mutton Biriyani',
        price: 220
    }
]

const search_item = 'dos';

const searched = items.filter((item) => {
    return item.name.toLowerCase().includes(search_item);
})

console.log(searched);