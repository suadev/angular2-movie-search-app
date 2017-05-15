 export class CommonConstants {
 requestCount:number = 0;

 private static _instance:CommonConstants = new CommonConstants();

 constructor() {
        if(CommonConstants._instance){
            throw new Error("Error: Instantiation failed: Use CommonConstants.getInstance() instead of new.");
        }
        CommonConstants._instance = this;
    }

    public static getInstance():CommonConstants
    {
        return CommonConstants._instance;
    } 
}