const products = [
    {
        id: 1,
        title: 'Nike Air Max 97',
        price: 180,
        stock: 10,
        img: `https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw37d70294/products/NIFN6957-400/NIFN6957-400-1.JPG`,
        category: 'man',
        discount: 10, // 10% de descuento
        description: [
            "Las Nike Air Max 97 son conocidas por su diseño icónico inspirado en las ondas de agua. Su unidad Air de longitud completa proporciona una comodidad excepcional para corredores y amantes de la moda urbana.",
            "Ideales tanto para el deporte como para el uso diario, estas zapatillas ofrecen estilo y rendimiento en partes iguales."
        ]
    },
    {
        id: 2,
        title: 'Adidas Yeezy Boost 350',
        price: 220,
        stock: 0,
        img: `https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw86066842/products/ADHQ7045/ADHQ7045-1.JPG`,
        category: 'man',
        description: [
            "Las Adidas Yeezy Boost 350 destacan por su diseño minimalista y su comodidad extrema gracias a la tecnología Boost en la suela.",
            "Perfectas para quienes buscan un look moderno y exclusivo, estas zapatillas son un símbolo de lujo urbano."
        ]
    },
    {
        id: 3,
        title: 'Balenciaga Triple S',
        price: 895,
        stock: 3,
        img: `https://dcdn.mitiendanube.com/stores/003/145/899/products/f_0011_485995_01-jpg-gigapixel-standard-scale-6_00x1-e495e650cde7f8d03816861046809670-1024-1024.jpg`,
        category: 'woman',
        freeShipping: true, // Envío gratis
        description: [
            "Las Balenciaga Triple S redefinieron la moda de las 'dad shoes' con su diseño audaz y voluminoso. Fabricadas con materiales premium, representan la alta moda.",
            "Estas zapatillas son ideales para quienes buscan destacar con un calzado innovador y atrevido."
        ]
    },
    {
        id: 4,
        title: 'Jordan 1 Retro High OG',
        price: 200,
        stock: 8,
        img: `https://nikearprod.vtexassets.com/arquivos/ids/877730/DZ5485_010_A_PREM.jpg?v=638467281554970000`,
        category: 'man',
        description: [
            "Las Jordan 1 Retro High OG son un clásico que marcó el inicio de la revolución del calzado de baloncesto. Su diseño atemporal sigue siendo relevante décadas después.",
            "Un must-have para coleccionistas y amantes del streetwear, combinan historia y estilo en cada paso."
        ]
    },
    {
        id: 5,
        title: 'Gucci Ace Sneakers',
        price: 750,
        stock: 4,
        img: `https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1580402705/429446_02JP0_9064_001_100_0000_Light-Sneaker-Ace-bordada-para-hombre.jpg`,
        category: 'woman',
        description: [
            "Las Gucci Ace Sneakers son un ícono de lujo, con detalles bordados y materiales de alta calidad que reflejan el estilo sofisticado de la marca.",
            "Perfectas para añadir un toque de elegancia a cualquier outfit casual."
        ]
    },
    {
        id: 6,
        title: 'Puma RS-X Reinvent',
        price: 120,
        stock: 10,
        img: `https://images.puma.net/images/369579/25/sv01/fnd/ARG/w/600/h/600/`,
        category: 'man',
        discount: 15, // 15% de descuento
        freeShipping: true, // Envío gratis
        description: [
            "Las Puma RS-X Reinvent combinan comodidad y estilo retro con un diseño inspirado en los años 80.",
            "Ideales para el running o como complemento en looks urbanos modernos."
        ]
    },
    {
        id: 7,
        title: 'New Balance 990v5',
        price: 185,
        stock: 7,
        img: `https://hips.hearstapps.com/hmg-prod/images/q219-made-990v5-key-visual-pdp-hero-gallery-2048px-1556627922.png`,
        category: 'man',
        description: [
            "Las New Balance 990v5 son sinónimo de comodidad y durabilidad. Fabricadas en EE. UU., ofrecen soporte y amortiguación superiores.",
            "Ideales para quienes buscan un calzado funcional y con estilo clásico."
        ]
    },
    {
        id: 8,
        title: 'ASICS Gel-Kayano 28',
        price: 160,
        stock: 12,
        img: `https://actitudsports.com.ar/wp-content/uploads/2022/11/kayano1.jpg`,
        category: 'man',
        description: [
            "Las ASICS Gel-Kayano 28 son perfectas para corredores de largas distancias, gracias a su estabilidad y amortiguación de alta tecnología.",
            "Diseñadas para mejorar el rendimiento sin comprometer la comodidad."
        ]
    },
    {
        id: 9,
        title: 'Salomon XT-6 Advanced',
        price: 220,
        stock: 5,
        img: `https://salomonstore.com.ar/cdn/shop/files/L41086600__1.jpg?v=1729772469&width=1024`,
        category: 'man',
        discount: 5, // 5% de descuento
        description: [
            "Las Salomon XT-6 Advanced son la elección perfecta para aventuras al aire libre. Su diseño robusto ofrece tracción y estabilidad en terrenos difíciles.",
            "Creadas para excursionistas y amantes de los deportes de montaña que buscan rendimiento y durabilidad."
        ]
    },
    {
        id: 10,
        title: 'Off-White x Nike Air Presto',
        price: 850,
        stock: 2,
        img: `https://static.flexdog.es/flexdog-8/products/images/fc441afa-e8c0-42de-9d1f-0ee902aef035.jpeg`,
        category: 'man',
        description: [
            "El diseño innovador de Off-White x Nike Air Presto combina estilo vanguardista con detalles exclusivos de la colaboración.",
            "Un calzado de edición limitada que destaca en cualquier colección."
        ]
    },
    {
        id: 11,
        title: 'Reebok Club C 85',
        price: 100,
        stock: 20,
        img: `https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa551900e/products/RE1100032972/RE1100032972-1.JPG`,
        category: 'man',
        description: [
            "Las Reebok Club C 85 son un clásico de los años 80 que sigue siendo relevante gracias a su diseño limpio y versátil.",
            "Perfectas para un look casual y retro que nunca pasa de moda."
        ]
    },
    {
        id: 12,
        title: 'Vans Old Skool',
        price: 60,
        stock: 30,
        img: `https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf6fc032f/products/VAVN000D3HY28/VAVN000D3HY28-1.JPG`,
        category: 'kids',
        freeShipping: true, // Envío gratis
        description: [
            "Las Vans Old Skool son un ícono del skateboarding, con su diseño clásico y suela vulcanizada para un mejor agarre.",
            "Ideales para skaters o como complemento en un outfit casual y urbano."
        ]
    },
    {
        id: 13,
        title: 'Alexander McQueen Oversized',
        price: 580,
        stock: 4,
        img: `https://assets.solesense.com/en/images/products/500/alexander-mcqueen-oversized-sneaker-2019-white-black-553770whgp79061_1.jpg`,
        category: 'woman',
        description: [
            "Las Alexander McQueen Oversized destacan por su diseño elegante y sobredimensionado. Son una declaración de estilo en el mundo del lujo.",
            "Perfectas para quienes buscan un calzado sofisticado y único."
        ]
    },
    {
        id: 14,
        title: 'Converse Chuck Taylor All Star',
        price: 70,
        stock: 25,
        img: `https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw98444d26/products/CO_157197C/CO_157197C-1.JPG`,
        category: 'kids',
        description: [
            "Las Converse Chuck Taylor All Star son un básico del calzado casual, con su diseño atemporal y versatilidad inigualable.",
            "Ideales para cualquier ocasión, desde looks informales hasta estilos más creativos."
        ]
    },
    {
        id: 15,
        title: 'Hoka One One Clifton 8',
        price: 130,
        stock: 10,
        img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Yr00RrWx9wjtkiNbHBFnfRosXM8tIhIyGw&s`,
        category: 'man',
        description: [
            "Las Hoka One One Clifton 8 ofrecen una amortiguación excepcional y un diseño ligero, ideales para corredores de larga distancia.",
            "Diseñadas para maximizar el confort sin comprometer el rendimiento."
        ]
    },
    {
        id: 16,
        title: 'Nike Air Zoom Pegasus 39',
        price: 120,
        stock: 15,
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/406910-1200-1200?width=1200&height=1200&aspect=true',
        category: 'man',
        description: [
            "Las Nike Air Zoom Pegasus 39 están diseñadas para ofrecer una excelente respuesta y confort en cada paso.",
            "Ideales para corredores que buscan velocidad y estabilidad."
        ],
        discount: 10,
    },
    {
        id: 17,
        title: 'Adidas Ultraboost 22',
        price: 180,
        stock: 8,
        img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/798d3061f5934cd1983bade800a7f2dd_9366/ZAPATILLAS_ULTRABOOST_22_Blanco_GX5595_01_standard.jpg',
        category: 'man',
        description: [
            "Las Adidas Ultraboost 22 ofrecen una comodidad superior con la tecnología Boost para máxima energía.",
            "Perfectas para quienes buscan una sensación de caminar sobre nubes."
        ]
    },
    {
        id: 18,
        title: 'Puma Ignite Flash evoKNIT',
        price: 110,
        stock: 20,
        img: 'https://static.runnea.com/images/201812/puma-ignite-flash-evoknit-caracteristicas-4-840xXx80.jpg?0',
        category: 'man',
        description: [
            "Las Puma Ignite Flash evoKNIT ofrecen un diseño dinámico y una amortiguación excelente.",
            "Con tecnología de punto evoKNIT para un ajuste perfecto."
        ],
        freeShipping: true
    },
    {
        id: 19,
        title: 'Asics Gel-Kayano 28',
        price: 150,
        stock: 12,
        img: 'https://actitudsports.com.ar/wp-content/uploads/2022/11/kayano1-600x600.jpg',
        category: 'man',
        description: [
            "Las Asics Gel-Kayano 28 están diseñadas para ofrecer soporte y estabilidad en cada paso.",
            "Ideales para quienes necesitan un control superior durante las carreras."
        ]
    },
    {
        id: 20,
        title: 'New Balance Fresh Foam 1080v11',
        price: 140,
        stock: 18,
        img: 'https://www.sumitate.com.ar/img/articulos/2023/06/zapatillas_de_running_new_balance_1080v12_fresh_foam_mujer_imagen1.jpg',
        category: 'man',
        description: [
            "Las New Balance Fresh Foam 1080v11 ofrecen una amortiguación fresca y ligera.",
            "Perfectas para corredores que buscan un alto rendimiento y comodidad."
        ],
        discount: 15,
    },
];
export default products;
