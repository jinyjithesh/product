export class Product {
    id:number;
    name:string;
    description:string;
    price:number;
    imageUrl:string;

constructor( id , name, description='', price=0, imageUrl='https://images-eu.ssl-images-amazon.com/images/I/51yBb4ATY9L._SY300_QL70_ML2_.jpg') { 
this.id = id
this.name = name
this.description = description
this.price = price
this.imageUrl = imageUrl
}
}
