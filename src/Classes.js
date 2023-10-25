class Field {
    constructor(name) {
        this.name = name;
        this.image = undefined;
        this.entities = [];
    }
}

class Entity {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // contains methods for every kind of entity
    moveTo(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Robot extends Entity {
    constructor(id, x=0, y=0) {
        super();
        this.id = id;
        this.x = x;
        this.y = y;
    }
}

class Piece extends Entity {
    constructor(id, type, x=0, y=0) {
        super();
        this.id = id;
        this.type = type;
    }
}