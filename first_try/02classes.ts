class Animal{
    public favFood: string;
    static numOfAnimals: number =0;
    constructor(private name: string, private owner: string){
        Animal.numOfAnimals++;
    }

    ownerInfo(){
        document.write("Owner: " + this.owner + "<br />");

    }

    static howManyAnimals(): number{
        return Animal.numOfAnimals;
    }

    private _weight: number;

    get weight(): number{
        return this._weight;
    }

    set weight(weight:number){
        this._weight= weight;
    }
}

let spot = new Animal("Spot", "Albert");
spot.ownerInfo();
spot.weight = 100;

document.write("Spot weight " + spot.weight+"<br />");




class Dog extends Animal {
    constructor(name: string, owner: string) {
        super(name, owner);
        Dog.numOfAnimals++;
    }
}

let grover = new Dog("Grover", "Jimmy");

grover instanceof Animal;
'name' in grover;


interface Vehicle{
    drive(): any;
}

class Car implements Vehicle{
    constructor(private wheels: number){
    }

    drive(): void{
        document.write("The car drives with: " + this.wheels + "<br />");

    }
}


