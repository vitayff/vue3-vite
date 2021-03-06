import { MockMethod } from 'vite-plugin-mock';


const goods = [
    { "id": 1, "kind": 1, "img": "/imgs/goods/水果.png", "title": "这是水果1", "content": "这是水果介绍", "price": 18 },
    { "id": 2, "kind": 1, "img": "/imgs/goods/水果2.png", "title": "这是水果2", "content": "这是水果介绍", "price": 20 },
    { "id": 3, "kind": 2, "img": "/imgs/goods/蔬菜.png", "title": "这是蔬菜1", "content": "这是蔬菜介绍", "price": 20 },
    { "id": 4, "kind": 2, "img": "/imgs/goods/蔬菜2.png", "title": "这是蔬菜2", "content": "这是蔬菜介绍", "price": 30 },
    { "id": 5, "kind": 3, "img": "/imgs/goods/肉蛋.png", "title": "这是肉蛋1", "content": "这是肉蛋介绍", "price": 10 },
    { "id": 6, "kind": 3, "img": "/imgs/goods/肉蛋2.png", "title": "这是肉蛋2", "content": "这是肉蛋介绍", "price": 15 },
    { "id": 7, "kind": 4, "img": "/imgs/goods/速冻.png", "title": "这是速冻1", "content": "这是速冻介绍", "price": 50 },
    { "id": 8, "kind": 4, "img": "/imgs/goods/速冻2.png", "title": "这是速冻2", "content": "这是速冻介绍", "price": 60 },
    { "id": 9, "kind": 5, "img": "/imgs/goods/酒饮.png", "title": "这是酒饮1", "content": "这是酒饮介绍", "price": 100 },
    { "id": 10, "kind": 5, "img": "/imgs/goods/酒饮2.png", "title": "这是酒饮2", "content": "这是酒饮介绍", "price": 70 },
    { "id": 11, "kind": 6, "img": "/imgs/goods/乳品.png", "title": "这是乳品1", "content": "这是乳品介绍", "price": 55 },
    { "id": 12, "kind": 6, "img": "/imgs/goods/乳品2.png", "title": "这是乳品2", "content": "这是乳品介绍", "price": 33 },
    { "id": 13, "kind": 7, "img": "/imgs/goods/零食.png", "title": "这是零食1", "content": "这是零食介绍", "price": 5 },
    { "id": 14, "kind": 7, "img": "/imgs/goods/零食2.png", "title": "这是零食2", "content": "这是零食介绍", "price": 15 }
]

const goodd = [
    { "id": 1, "kind": 1, "img": "/imgs/goods/水果.png", "title": "这是水果1", "content": "这是水果介绍", "price": 18 },
    { "id": 2, "kind": 1, "img": "/imgs/goods/水果2.png", "title": "这是水果2", "content": "这是水果介绍", "price": 20 },
    { "id": 3, "kind": 2, "img": "/imgs/goods/蔬菜.png", "title": "这是蔬菜1", "content": "这是蔬菜介绍", "price": 20 },
    { "id": 4, "kind": 2, "img": "/imgs/goods/蔬菜2.png", "title": "这是蔬菜2", "content": "这是蔬菜介绍", "price": 30 },
    { "id": 5, "kind": 3, "img": "/imgs/goods/肉蛋.png", "title": "这是肉蛋1", "content": "这是肉蛋介绍", "price": 10 },
    { "id": 6, "kind": 3, "img": "/imgs/goods/肉蛋2.png", "title": "这是肉蛋2", "content": "这是肉蛋介绍", "price": 15 },
    { "id": 7, "kind": 4, "img": "/imgs/goods/速冻.png", "title": "这是速冻1", "content": "这是速冻介绍", "price": 50 },
    { "id": 8, "kind": 4, "img": "/imgs/goods/速冻2.png", "title": "这是速冻2", "content": "这是速冻介绍", "price": 60 },
    { "id": 9, "kind": 5, "img": "/imgs/goods/酒饮.png", "title": "这是酒饮1", "content": "这是酒饮介绍", "price": 100 },
    { "id": 10, "kind": 5, "img": "/imgs/goods/酒饮2.png", "title": "这是酒饮2", "content": "这是酒饮介绍", "price": 70 },
    { "id": 11, "kind": 6, "img": "/imgs/goods/乳品.png", "title": "这是乳品1", "content": "这是乳品介绍", "price": 55 },
    { "id": 12, "kind": 6, "img": "/imgs/goods/乳品2.png", "title": "这是乳品2", "content": "这是乳品介绍", "price": 33 },
    { "id": 13, "kind": 7, "img": "/imgs/goods/零食.png", "title": "这是零食1", "content": "这是零食介绍", "price": 5 },
    { "id": 14, "kind": 7, "img": "/imgs/goods/零食2.png", "title": "这是零食2", "content": "这是零食介绍", "price": 15 }
]


export default [
    {
        url: '/api/goods',
        method: 'get',
        response: goods
    },
    {
        url: '/api/goodd',
        method: 'get',
        response: goodd,
    }
] as MockMethod[];
