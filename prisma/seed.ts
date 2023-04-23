import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const foods = [
    {   name:'Grilled Fish',
        description: 'Spicy grilled fish',
        image: 'https://media-cdn2.greatbritishchefs.com/media/ftufg1ry/img17687.whqc_1426x713q90fpt504fpl517.jpg',
        price: '8.50',
        about: 'Our most popular choice! A delicious mix of different meal with various ingredients like salmon, tomato, bean, potato and much more.',
        categoryId: 3
    },
    {   name:'Grilled Chicken',
        description: 'Spicy grilled chicken',
        image: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-square-FS-New-7377.jpg',
        price: '7.50',
        about: 'Our most popular choice! A delicious mix of different meal with various ingredients like salmon, tomato, bean, potato and much more.',
        categoryId: 3
    },
    {   name:'Grilled Noodle',
        description: 'Spicy grilled noodle',
        image: 'https://choosingchia.com/jessh-jessh/uploads/2022/04/Mie-Goreng-3-2.jpg',
        price: '6.50',
        about: 'Our most popular choice! A delicious mix of different meal with various ingredients like salmon, tomato, bean, potato and much more.',
        categoryId: 3
    },
    {   name:'Grilled Rice',
        description: 'Spicy grilled rice',
        image: 'https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_1043177881.jpg',
        price: '4.50',
        about: 'Our most popular choice! A delicious mix of different meal with various ingredients like salmon, tomato, bean, potato and much more.',
        categoryId: 3
    },
    {   name: 'Fried Octopus',
        description: 'Spicy fried octopus',
        image: 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/stewed-baby-octopus-pops-estofats.jpg',
        price: '10.50',
        about: 'Our most popular choice! A delicious mix of different meal with various ingredients like salmon, tomato, bean, potato and much more.',
        categoryId: 3
    },
    {   name: 'Fried Lamb',
        description: 'Spicy fried lamb',
        image: 'https://assets.epicurious.com/photos/58865070d79ae59e2081c12e/1:1/w_2560%2Cc_limit/lamb-fry-recipe-12012017.jpg',
        price: '9.50',
        about: 'Our most popular choice! A delicious mix of different meal with various ingredients like salmon, tomato, bean, potato and much more.',
        categoryId: 3
    },
    {   name: 'Fried Pork',
        description: 'Spicy fried pork',
        image: 'https://www.thespruceeats.com/thmb/vZmyXlZwV_Ja8F8-wVIiJphfj2k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tonkatsu-recipe-japanese-breaded-and-deep-fried-pork-2031274-hero-01-31a9f4e17fc04eeba22dee6c0caf27b7.jpg',
        price: '8.50',
        about: 'Our most popular choice! A delicious mix of different meal with various ingredients like salmon, tomato, bean, potato and much more.',
        categoryId: 3
    },

]

const couriers = [
    {
        name: 'Andi',
        surname: 'Hermansyah',
        avatar: 'https://cdn-icons-png.flaticon.com/512/5556/5556512.png',
        phone: '+375 (29) 333 33 33'
    },
    {
        name: 'Agung',
        surname: 'Prasetya',
        avatar: 'https://cdn-icons-png.flaticon.com/512/5556/5556520.png',
        phone: '+375 (29) 444 44 44'
    },
    {
        name: 'Budi',
        surname: 'Sanjaya',
        avatar: 'https://cdn-icons-png.flaticon.com/512/5556/5556529.png',
        phone: '+375 (29) 222 22 22'
    }
]

const categories =  ['Vegetarian', 'Drink','Fast food', 'Spicy', 'Salty', 'Sour'];

function seedFoods() {
    Promise.all(foods.map(food => prisma.food.create({ data: { name: food.name, about: food.about, description: food.description, image: food.image, price: food.price, categoryId: food.categoryId } })))
        .then(() => console.info('[SEED] Successfully create foods records'))
        .catch(e => console.error('[SEED] Failed to create foods records', e))
}

function seedCouriers() {
    Promise.all(couriers.map(courier => prisma.courier.create({ data: { name: courier.name, surname: courier.surname, phone: courier.phone, avatar: courier.avatar } })))
        .then(() => console.info('[SEED] Successfully create couriers records'))
        .catch(e => console.error('[SEED] Failed to create couriers records', e))
}

function seedCategories() {
    Promise.all(categories.map(category => prisma.category.create({ data: { title: category} })))
        .then(() => console.info('[SEED] Successfully create categories records'))
        .catch(e => console.error('[SEED] Failed to create categories records', e))
}

seedFoods();
seedCouriers();
seedCategories();
