import fractal from './assets/fractal.jpg';
import fractalLeft from './assets/fractalLeft.jpg';
import battleCruiser from './assets/battleCruiser.jpg';
import battleCruiserLeft from './assets/battleCruiserLeft.jpg';
import deepCool from './assets/deepCool.jpg';
import deepCoolLeft from './assets/deepCoolLeft.jpg';
import snow from './assets/snow.jpg';
import snowLeft from './assets/snowLeft.jpg';
import beQuiet from './assets/beQuiet.jpg';
import beQuietLeft from './assets/beQuietLeft.jpg';
import z690 from './assets/z690.jpg';
import z690Left from './assets/z690Left.jpg';
import b660m from './assets/b660m.jpg';
import b660mLeft from './assets/b660mLeft.jpg';
import msiZ690 from './assets/msiZ690.jpg';
import msiZ690Left from './assets/msiZ690Left.jpg'
import intelCore from './assets/intelCore.jpg';
import intelCoreLeft from './assets/intelCoreLeft.jpg';
import intelCore11 from './assets/intelCore11.jpg';
import intelCore11Left from './assets/intelCore11Left.jpg';
import ram from './assets/ram.jpg';
import ramLeft from './assets/ramLeft.jpg';
import vengeance from './assets/vengeance.jpg';
import vengeanceLeft from './assets/vengeanceLeft.jpg';
import CMS from './assets/CMS.jpg';
import CMSLeft from './assets/CMSLeft.jpg';
import power from './assets/power.jpg';
import powerLeft from './assets/powerLeft.jpg';

const products = [
    {
        title: "Fractal Design Meshify 2 Compact",
        class: "Case",
        mouseOut: fractal,
        mouseOver: fractalLeft,
        price: 150.99
    },
    {
        title: "ADATA XPG Battlecruiser",
        class: "Case",
        mouseOut: battleCruiser,
        mouseOver: battleCruiserLeft,
        price: 199.99
    },
    {
        title: "Deepcool CL500",
        class: "Case",
        mouseOut: deepCool,
        mouseOver: deepCoolLeft,
        price: 89.99
    },
    {
        title: "Thermaltake View 51 Snow",
        class: "Case",
        mouseOut: snow,
        mouseOver: snowLeft,
        price: 240.99
    },
    {
        title: "Be Quiet!",
        class: "Case",
        mouseOut: beQuiet,
        mouseOver: beQuietLeft,
        price: 107.89
    },
    {
        title: "Gigabyte Z690 AORUS Master",
        class: "Mother Board",
        mouseOut: z690,
        mouseOver: z690Left,
        price: 469.99
    }, 
    {
        title: "Gigabyte B660M",
        class: "Mother Board",
        mouseOut: b660m,
        mouseOver: b660mLeft,
        price: 109.99
    },
    {
        title: "MSI Z690",
        class: "Mother Board",
        mouseOut: msiZ690,
        mouseOver: msiZ690Left,
        price: 366.26
    },
    {
        title: "Intel Core i5-11400",
        class: "Processor",
        mouseOut: intelCore,
        mouseOver: intelCoreLeft,
        price: 169.99
    },
    {
        title: "Intel Core i7-9700KF",
        class: "Processor",
        mouseOut: intelCore11,
        mouseOver: intelCore11Left,
        price: 388.62
    },
    {
        title: "Kingston RAM 8GB",
        class: "RAM",
        mouseOut: ram,
        mouseOver: ramLeft,
        price: 40.88
    },
    {
        title: "Corsair Vengeance DDR5 32GB",
        class: "RAM",
        mouseOut: vengeance,
        mouseOver: vengeanceLeft,
        price: 209.99
    },
    {
        title: "CMS 8GB",
        class: "RAM",
        mouseOut: CMS,
        mouseOver: CMSLeft,
        price: 36.25
    },
    {
        title: "EVGA 210",
        class: "Power Supply Unit",
        mouseOut: power,
        mouseOver: powerLeft,
        price: 102.73
    }
];

export default products;