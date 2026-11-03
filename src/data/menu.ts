import type { AddOnOption, MenuItem } from '../types';

export const burgerAddons: AddOnOption[] = [
  { id: 'carne-papas', label: 'Carne y papas', price: 5000 },
  { id: 'cheddar-toppings', label: 'Cheddar y toppings', price: 2000 },
];

export const menuItems: MenuItem[] = [
  // ---- BURGERS CLÁSICAS ----
  {
    id: 'cheese-burger',
    name: 'Cheese Burger',
    description: 'Pan de papa, carne y cheddar.',
    category: 'clasicas',
    image: 'https://images.pexels.com/photos/20722035/pexels-photo-20722035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    sizes: [
      { key: 'simple', label: 'Simple', price: 17000 },
      { key: 'doble', label: 'Doble', price: 19500 },
      { key: 'triple', label: 'Triple', price: 21500 },
    ],
  },
  {
    id: 'cheese-bacon',
    name: 'Cheese Bacon',
    description: 'Pan de papa, carne, cheddar, bacon y salsa regular (mostaza, ketchup y cebolla).',
    category: 'clasicas',
    image: 'https://images.pexels.com/photos/31450815/pexels-photo-31450815.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    sizes: [
      { key: 'simple', label: 'Simple', price: 17000 },
      { key: 'doble', label: 'Doble', price: 19500 },
      { key: 'triple', label: 'Triple', price: 21500 },
    ],
  },
  {
    id: 'golden',
    name: 'Golden',
    description: 'Pan de papa, carne, cheddar, cebolla caramelizada con mostaza y miel.',
    category: 'clasicas',
    image: 'https://images.pexels.com/photos/23910856/pexels-photo-23910856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Especial',
    sizes: [
      { key: 'doble', label: 'Doble', price: 19500 },
      { key: 'triple', label: 'Triple', price: 21500 },
    ],
  },
  {
    id: 'big-man',
    name: 'Big Man',
    description: 'Pan de papa, carne, cheddar, pepinillos, cebolla, lechuga y salsa Big Mac.',
    category: 'clasicas',
    image: 'https://images.pexels.com/photos/20722046/pexels-photo-20722046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    sizes: [
      { key: 'simple', label: 'Simple', price: 17000 },
      { key: 'doble', label: 'Doble', price: 19500 },
      { key: 'triple', label: 'Triple', price: 21500 },
    ],
  },
  {
    id: 'green-burger',
    name: 'Green Burger',
    description: 'Pan de papa, medallón de lenteja o calabaza, provoleta, rúcula, tomate, cebolla morada y alioli.',
    category: 'clasicas',
    image: 'https://images.pexels.com/photos/20741663/pexels-photo-20741663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Veggie',
    sizes: [
      { key: 'simple', label: 'Simple', price: 16000 },
      { key: 'doble', label: 'Doble', price: 18000 },
    ],
  },

  // ---- BURGERS ESPECIALES ----
  {
    id: 'cuarto-tasty',
    name: 'Cuarto de Libra Tasty',
    description: 'Pan de papa, carne, cheddar, salsa Tasty y salsa regular.',
    category: 'especiales',
    image: 'https://images.pexels.com/photos/20722048/pexels-photo-20722048.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    sizes: [
      { key: 'doble', label: 'Doble', price: 19500 },
      { key: 'triple', label: 'Triple', price: 21500 },
    ],
  },
  {
    id: 'parrillera',
    name: 'Parrillera',
    description: 'Pan de papa, carne, queso tybo, rúcula, morrones asados y salsa chimi.',
    category: 'especiales',
    image: 'https://images.pexels.com/photos/20722047/pexels-photo-20722047.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    sizes: [
      { key: 'doble', label: 'Doble', price: 19500 },
      { key: 'triple', label: 'Triple', price: 21500 },
    ],
  },
  {
    id: 'tasty-bacon',
    name: 'Tasty Bacon',
    description: 'Pan de papa, carne, cheddar, bacon, tomate, lechuga y salsa Tasty.',
    category: 'especiales',
    image: 'https://images.pexels.com/photos/2089717/pexels-photo-2089717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    sizes: [
      { key: 'doble', label: 'Doble', price: 19500 },
      { key: 'triple', label: 'Triple', price: 21500 },
    ],
  },
  {
    id: 'tulu',
    name: 'Tulu',
    description: 'Pan de papa, carne, cheddar, bacon, aros de cebolla y BBQ.',
    category: 'especiales',
    image: 'https://images.pexels.com/photos/20722030/pexels-photo-20722030.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'La de la casa',
    sizes: [
      { key: 'doble', label: 'Doble', price: 19500 },
      { key: 'triple', label: 'Triple', price: 21500 },
    ],
  },
  {
    id: 'crispy-onion',
    name: 'Crispy Onion',
    description: 'Pan de papa, carne, cheddar, bacon, cebolla crispy y alioli.',
    category: 'especiales',
    image: 'https://images.pexels.com/photos/9201333/pexels-photo-9201333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    sizes: [
      { key: 'doble', label: 'Doble', price: 19500 },
      { key: 'triple', label: 'Triple', price: 21500 },
    ],
  },
  {
    id: 'stacker',
    name: 'Stacker',
    description: 'Pan de papa, carne, cheddar, bacon y salsa Stacker.',
    category: 'especiales',
    image: 'https://images.pexels.com/photos/34407508/pexels-photo-34407508.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    sizes: [
      { key: 'doble', label: 'Doble', price: 19500 },
      { key: 'triple', label: 'Triple', price: 21500 },
    ],
  },
  {
    id: 'blue-cheese',
    name: 'Blue Cheese',
    description: 'Pan de papa, carne, queso dambo, cebolla caramelizada y roquefort.',
    category: 'especiales',
    image: 'https://images.pexels.com/photos/14701530/pexels-photo-14701530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    sizes: [
      { key: 'doble', label: 'Doble', price: 20000 },
      { key: 'triple', label: 'Triple', price: 22000 },
    ],
  },
  {
    id: 'muzza-burger',
    name: 'Muzza Burger',
    description: 'Pan de papa, carne, cheddar, bastones de muzza y BBQ.',
    category: 'especiales',
    image: 'https://images.pexels.com/photos/20722044/pexels-photo-20722044.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    sizes: [
      { key: 'doble', label: 'Doble', price: 20000 },
      { key: 'triple', label: 'Triple', price: 22000 },
    ],
  },
  {
    id: 'pollo-crispy',
    name: 'Pollo Crispy',
    description: 'Pan de papa, medallón crispy, cheddar, lechuga, tomate y salsa César.',
    category: 'especiales',
    image: 'https://images.pexels.com/photos/20722058/pexels-photo-20722058.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    sizes: [
      { key: 'simple', label: 'Simple', price: 16000 },
      { key: 'doble', label: 'Doble', price: 18000 },
    ],
  },

  // ---- EXTRAS Y BEBIDAS ----
  {
    id: 'carne-papas',
    name: 'Carne y Papas',
    description: 'Extra de carne y papas adicionales.',
    category: 'extras',
    image: 'https://images.pexels.com/photos/40690540/pexels-photo-40690540.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    singlePrice: 5000,
  },
  {
    id: 'cheddar-toppings',
    name: 'Cheddar y Toppings',
    description: 'Extra de cheddar derretido y toppings.',
    category: 'extras',
    image: 'https://images.pexels.com/photos/3915915/pexels-photo-3915915.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    singlePrice: 2000,
  },
  {
    id: 'bastones-muzza',
    name: 'Bastones de Muzza',
    description: 'Bastones de muzza rebozados y fritos, con salsa para dipear.',
    category: 'extras',
    image: 'https://images.pexels.com/photos/343873/pexels-photo-343873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    priceOptions: [
      { label: '6 unidades', price: 7500 },
      { label: '10 unidades', price: 12000 },
    ],
  },
  {
    id: 'nuggets',
    name: 'Nuggets',
    description: 'Nuggets de pollo crujientes con salsa a elección.',
    category: 'extras',
    image: 'https://images.pexels.com/photos/20003232/pexels-photo-20003232.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    priceOptions: [
      { label: '6 unidades', price: 6000 },
      { label: '10 unidades', price: 10000 },
    ],
  },
  {
    id: 'lata-gaseosa',
    name: 'Lata de Gaseosa',
    description: 'Bebida fría en lata. Sabor a elección.',
    category: 'extras',
    image: 'https://images.pexels.com/photos/17650223/pexels-photo-17650223.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    singlePrice: 3500,
  },
];

export const categoryLabels: Record<MenuItem['category'], string> = {
  clasicas: 'Burgers Clásicas',
  especiales: 'Burgers Especiales',
  extras: 'Extras y Bebidas',
};
