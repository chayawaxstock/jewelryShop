import { Material } from './material';
import { Color } from './color';
import { Image } from './image';
import { Designer } from './designer';
import { Supplier } from './supplier';
import { Category } from './category';

export class Jewelry{

    id:number;
    name:string;
    serialNumber:number;
    description:string;
    cost:number;
    price:number;
    sale:number;
    quantity:number;
    minQuantity:number;
    materials:Material[]=[];
    size:number;
    colors:Color[]=[];
    images:Image[]=[];
    weight:number;
    designer:Designer;
    supplier:Supplier;
    category:Category;
    createDate:Date;
    updateDate:Date;
    ratings:number;
    favourite:number;
    
}