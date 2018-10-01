
const car = (name, model, owner, year, phone, image) => ({
    name, model, owner, year, phone, image
});

const log = (text, type, date = new Date()) => ({text, type, date});

const cars = [
    car('Ford', 'Focus', 'Max', 2015, '+7 954 456 12 78', 'images/1.jpeg'),
    car('Ford', 'Mondeo', 'Nik', 2009, '+7 789 321 89 41', 'images/2.jpeg'),
    car('Mazda', 'RX-5', 'Max', 2016, '+7 547 852 47 63', 'images/3.jpeg'),
];

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        cart: [],
        logs: [],
        selectCarIndex: 0,
        showPhone: false,
        search: '',
        showModal: false
    },
    methods: {
        selectCar(index) {
            this.car = this.filteredCars[index];
            this.selectCarIndex = index;
        },
        closeModal() {
            this.showModal = false;
            this.logs.push(
                log('Cansel order: ' + this.car.name +' - ' +this.car.model, 'cnl')
            );
        },
        addToCart(item) {
            this.cart.push(item);
            this.showModal = false;
            this.logs.push(log('Success order: ' + this.car.name +' - ' +this.car.model, 'ok'));
        }
    },
    computed: {
        phoneBtnText() {
            return this.showPhone ? 'Hide phone' : 'Show phone';
        },
        filteredCars() {
            return this.cars.filter(
                (car) => {
                    return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
                })
        }
    },
    filters: {
        date(value) {
            return value.toLocaleDateString();
        }
    }
});