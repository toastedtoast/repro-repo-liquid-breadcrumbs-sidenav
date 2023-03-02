interface Fruit {
  name: string;
  slug: string;
  icon: string;
}
interface FruitCategory {
  name: string;
  slug: string;
  fruits: Fruit[];
}

export const fruits: FruitCategory[] = [
  {
    name: "Berries",
    slug: "berries",
    fruits: [
      {
        name: "Strawberry",
        slug: "strawberry",
        icon: "🍓",
      },
      {
        name: "Blueberry",
        slug: "blueberry",
        icon: "🫐",
      },
    ],
  },
  {
    name: "Citrus",
    slug: "citrus",
    fruits: [
      {
        name: "Lemon",
        slug: "lemon",
        icon: "🍋",
      },
      {
        name: "Orange",
        slug: "orange",
        icon: "🍊",
      },
    ],
  },
  {
    name: "Pepos",
    slug: "pepos",
    fruits: [
      {
        name: "Watermelon",
        slug: "watermelon",
        icon: "🍉",
      },
    ],
  },
  {
    name: "Pomes",
    slug: "pomes",
    fruits: [
      {
        name: "Apple",
        slug: "apple",
        icon: "🍎",
      },
      {
        name: "Pear",
        slug: "pear",
        icon: "🍐",
      },
    ],
  },
];
