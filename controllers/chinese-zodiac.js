class ChineseZodiac {

    constructor(){
        this.animals = ["Monkey", "Cock", "Dog", "Boar", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"]
    }
  
    //getAnimal figure out the Chinese Zodiac animal for any given birthyear.
    getAnimal(birthyear) {
        return this.animals[(birthyear % this.animals.length)];
    }
}

module.exports = ChineseZodiac