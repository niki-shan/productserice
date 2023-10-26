


export interface Idata{
    Pname: string;
    Pdetail:string
    id:string
    Pstatus: ProductStatus;
}


export enum ProductStatus{
    Inprograse = "Inprograse",
    dispatched ="dispatched",
    delivered = "delivered",
}