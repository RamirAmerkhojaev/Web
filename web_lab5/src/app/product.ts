export class Product {
  id : number;
  name: string;
  price: number;
  link: string;
  rating: number;
  textlink: string;
  description: string;
  constructor(id: number, name: string, price: number, textlink: string, link: string, rating: number, description: string){
    this.id = id;
    this.name = name;
    this.price = price;
    this.textlink = textlink;
    this.link = link;
    this.rating = rating;
    this.description = description;
  }
}





