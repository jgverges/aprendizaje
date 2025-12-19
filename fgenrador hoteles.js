const cities = ['bcn', 'madrid', 'valencia'];
const citiesQt = cities.length;
const names = ['hotel', 'airbnb', 'hostel', 'apartment'];
const namesQt = names.length;

const generateCity = () => {
    Math.floor(Math.random() * citiesQt)
}
const generateName = () => Math.floor(Math.random() * namesQt)
const generateID=() => Math.floor(Math.random() * 50000)

const creatHotel = () => {
    const newHotel = {
        city: generateCity(),
        name: generateName(),
        id:generateID()
    }
    return newHotel
}

const hotelsGenerator = (quantity) => {
    if (quantity > 0) {
        const hotels = []
        for (let x = 0; x < quantity; x++) {
            hotels.push(creatHotel(x))
            hotels
        }
        if (hotels.length > 0) {
            return { hotels, error: null }
        } else {
            return { hotels, error: 'No se puede generar un hotel con 0 o menos hoteles' }
        }
    }
    return { hotels, error: 'No se puede generar un hotel con 0 o menos hoteles' }
};

const hotelList = hotelsGenerator(10)

//**********859****** */
hotelList[0].hotels

// x998944