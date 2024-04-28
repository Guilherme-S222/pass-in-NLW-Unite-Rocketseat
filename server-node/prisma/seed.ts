import { prisma } from '../src/lib/prisma';

async function seed() {
    await prisma.event.create({
        data: {
            id: '4734ccf9-2328-4801-8a0f-98f084745977',
            title: 'Unite Summit',
            slug: 'Unite Summit',
            details: 'Um evento para devs apaixonados(as) por código',
            maximumAttendees: 120,
        }

    })
}

seed().then(() => {
    console.log('Database seeded!');
    prisma.$disconnect()

})