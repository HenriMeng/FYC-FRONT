import {Task} from "../domain/task.model";

const today = new Date().toString();

export const tasksResources: Task[] = [
    new Task({
        id: 4,
        content: 'Build A Better Burrito: 7 Layers To Success',
        date: today,
        status: 'Resources'
    }),
    new Task({
        id: 15,
        content: '2017 Goals And KPIs',
        date: today,
        status: 'Resources'
    }),
    new Task({
        id: 16,
        content: 'Brand Guide',
        date: today,
        status: 'Resources'
    }),
    new Task({
        id: 17,
        content: 'Employee Manual',
        date: today,
        status: 'Resources'
    }),
]

export const tasksTodo: Task[] = [
    new Task({
        id: 1,
        content: 'Build A Better Burrito: 7 Layers To Success',
        date: today,
        status: 'To do'
    }),
    new Task({
        id: 2,
        content: 'Nacho Ordinay Birthday - Event Space Rentals',
        date: today,
        status: 'To do'
    }),
    new Task({
        id: 3,
        content: 'Taco Drone Delivery Service',
        date: today,
        status: 'To do'
    }),
    new Task({
        id: 9,
        content: 'Superbowl Ad - "Super Salad Bowls"',
        date: today,
        status: 'To do'
    })
];

export const tasksDoing = [
    new Task({
        id: 5,
        content: 'Build A Better Burrito: 7 Layers To Success',
        date: today,
        status: 'Doing'
    }),
    new Task({
        id: 6,
        content: 'Operation "Awesome Sauce" - A Recipe For Profit',
        date: today,
        status: 'Doing'
    }),
    new Task({
        id: 7,
        content: '#NoFilter Instagram Campaign',
        date: today,
        status: 'Doing'
    }),
    new Task({
        id: 8,
        content: 'Global Franchise Opportunities',
        date: today,
        status: 'Doing'
    })
]

export const tasksDone: Task[] = [
    new Task({
        id: 10,
        content: 'Focus Group: Corn vs. Flour Tortillas',
        date: today,
        status: 'Done'
    }),
    new Task({
        id: 11,
        content: 'New Swag: Socks, Scarves & Salsa',
        date: today,
        status: 'Done'
    }),
    new Task({
        id: 12,
        content: 'Eco Friendly Utensils & Napkins',
        date: today,
        status: 'Done'
    }),
    new Task({
        id: 13,
        content: 'Update Yelp Listing',
        date: today,
        status: 'Done'
    }),
    new Task({
        id: 14,
        content: 'Grand Opening Celebration',
        date: today,
        status: 'Done'
    })
];