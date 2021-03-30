export class Calculator {
    value: number
    calculated: number
    constructor(){
        this.value = 0
        
    }
    add(n: number): number{
        return this.value += n

    }
}