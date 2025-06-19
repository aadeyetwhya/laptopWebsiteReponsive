import { laptopData } from "./data";

export const modelData=[];
laptopData.forEach((eachLaptopData)=>{
    if(!modelData.includes(eachLaptopData.brand)){
        modelData.push(eachLaptopData.brand);
    }
    
})

