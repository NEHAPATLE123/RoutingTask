


export interface Iproduct{
    pname: string;
    pid: number;
    pstatus: Istatus;
    img : string;
}

export type Istatus = "In-Progress" | "Dispatched" | "Delivered"