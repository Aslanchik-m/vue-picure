export interface Dish {
  id: string;
  name: string;
  img: string;
  icon: string;
  description: string;
  price: number;
  meal: "breakfast" | "lunch" | "dinner";
  signature: boolean;
  restName: string;
}
