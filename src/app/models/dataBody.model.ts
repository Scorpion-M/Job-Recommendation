export class DataBody {
    a1:string | undefined;
    a2:string | undefined;
    a3:string | undefined;
    a4:string | undefined;
    a5:string | undefined;
    tweets:string | undefined;
    /**
     *
     */
    constructor(
        a1?:string,
        a2?:string,
        a3?:string,
        a4?:string,
        a5?:string,
        tweets?:string
    ) {
        
        this.a1 =  a1
        this.a2 =  a2
        this.a3 =  a3
        this.a4 =  a4
        this.a5 =  a5
        this.tweets = tweets
    }

}