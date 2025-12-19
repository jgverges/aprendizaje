const cities = ['bcn', 'madrid', 'valencia',];
const names = ['hotel', 'airbnb', 'hostel', 'apartment'];




const result = cities.map(city => {
    return names.map(name => {
        return `${city}-${name}`;
    });
});

console.log(result);
