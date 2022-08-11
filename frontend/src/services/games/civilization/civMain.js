import islandnames from "@/services/games/civilization/islandnames";

class CivGame {
    islands = []
    money = 0

    constructor(starterIslands = 1) {
        for (let i = 0; i < starterIslands; i++) {
            this.addEmptyIsland()
        }
    }

    tick() {
        for (let island of this.islands) {
            this.money += island.tick()
        }
        return this.money
    }

    addEmptyIsland() {
        this.islands.push(new Island(islandnames[Math.floor(Math.random() * islandnames.length)]))
    }
}

class Island {

    static goodsProductionDictionary = {
        'sawmill 🪵': '🪵',
        'clay pit🧱': '🧱'
    }

    constructor(
        name,
        houses = 2,
        starterProducts = {'🪵': 20, '🔩': 5, '🧱': 10},
        starterProductionBuildings={'sawmill 🪵':2, 'clay pit🧱':1},
        starterStaticBuildings=['market 💹', 'Pub 🍻', 'Grocery Store 🏬']
    ) {
        this.name = name
        for (let i = 0; i < houses; i++) {
            this.addHouse()
        }
        this.resources = starterProducts
        for (const productionBuilding in starterProductionBuildings) {
            for (let i = 0; i < starterProductionBuildings[productionBuilding]; i++) {
                this.addProductionBuilding(productionBuilding)
            }
        }
        this.staticBuildings = starterStaticBuildings
    }

    houses = []
    productionBuildings = []

    tick() {
        let money = 0
        for (const house of this.houses) {
            money += house.tick(this.staticBuildings)
        }
        for (const productionBuilding of this.productionBuildings) {
            const prod = productionBuilding.tick()
            if (prod.product !== undefined) {
                this.resources[prod.product] += prod.amount
            }
        }
        return money
    }

    addHouse() {
        this.houses.push(new House())
    }

    addProductionBuilding(productionName) {
        this.productionBuildings.push(new ProductionBuilding(
            productionName,
            Island.goodsProductionDictionary[productionName]
        ))
    }

    // addStaticBuilding() {this.staticBuildings.push(new Static)}
}

class House {
    level = 1

    tick(staticBuildingOfIsland) {
        return Math.floor(this.level + staticBuildingOfIsland.length * .5)

    }
}

class ProductionBuilding {
    level = 1

    constructor(name, product) {
        this.name = name
        this.product = product
    }

    tick() {
        return {product: this.product, amount: this.level}
    }
}

export default CivGame;
