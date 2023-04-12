import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    // const fish = await prisma.food.upsert({
    //     where: {id: 1},
    //     update: {},
    //     create: {
    //         name: 'Grilled Fish',
    //         description: 'Spicy grilled fish',
    //         image: 'https://media-cdn2.greatbritishchefs.com/media/ftufg1ry/img17687.whqc_1426x713q90fpt504fpl517.jpg',
    //         price: '8.50',
    //         about: 'Our most popular choice! A delicious mix of different meal with various ingredients like salmon, tomato, bean, potato and much more.'
    //
    //     },
    // })
    //
    // const chicken = await prisma.food.upsert({
    //     where: {id: 2},
    //     update: {},
    //     create: {
    //         name: 'Fried Chicken',
    //         description: 'Spicy fried chicken',
    //         image: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-square-FS-New-7377.jpg',
    //         price: '7.50',
    //         about: 'Our most popular choice! A delicious mix of different meal with various ingredients like salmon, tomato, bean, potato and much more.'
    //
    //     },
    // })
    //
    // const noodle = await prisma.food.upsert({
    //     where: {id: 3},
    //     update: {},
    //     create: {
    //         name: 'Fried Noodle',
    //         description: 'Spicy fried noodle',
    //         image: 'https://choosingchia.com/jessh-jessh/uploads/2022/04/Mie-Goreng-3-2.jpg',
    //         price: '6.50',
    //         about: 'Our most popular choice! A delicious mix of different meal with various ingredients like salmon, tomato, bean, potato and much more.'
    //
    //     },
    // })
    //
    // const rice = await prisma.food.upsert({
    //     where: {id: 4},
    //     update: {},
    //     create: {
    //         name: 'Fried Rice',
    //         description: 'Spicy fried rice',
    //         image: 'https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_1043177881.jpg',
    //         price: '4.50',
    //         about: 'Our most popular choice! A delicious mix of different meal with various ingredients like salmon, tomato, bean, potato and much more.'
    //
    //     },
    // })

    const courierOne = await prisma.courier.upsert({
        where: {id: 1},
        update: {},
        create: {
            name: 'Budi',
            surname: 'Sanjaya',
            avatar: 'https://cdn-icons-png.flaticon.com/512/5556/5556529.png',
            phone: '+375 (29) 222 22 22'
        },
    })

    const courierTwo = await prisma.courier.upsert({
        where: {id: 2},
        update: {},
        create: {
            name: 'Andi',
            surname: 'Hermansyah',
            avatar: 'https://cdn-icons-png.flaticon.com/512/5556/5556512.png',
            phone: '+375 (29) 333 33 33'
        },
    })

    const courierThree = await prisma.courier.upsert({
        where: {id: 3},
        update: {},
        create: {
            name: 'Agung',
            surname: 'Prasetya',
            avatar: 'https://cdn-icons-png.flaticon.com/512/5556/5556520.png',
            phone: '+375 (29) 444 44 44'
        },
    })

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
