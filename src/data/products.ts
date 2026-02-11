// define type here itself
export type Product = {
    id: number
    title: string
    price: number
    image: string
    description: string
  }
  
  export const products: Product[] = [
    {
      id: 1,
      title: "iPhone 15",
      price: 79999,
      image: "https://picsum.photos/300?1",
      description: "Latest Apple phone"
    },
    {
      id: 2,
      title: "Laptop",
      price: 55999,
      image: "https://picsum.photos/300?2",
      description: "Gaming laptop"
    },
  ]