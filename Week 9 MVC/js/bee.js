class Bee {
    constructor(loc) {
        this.x = loc;
        this.y = loc;
        this.targetX = this.x;
        this.targetY = this.y;
        this.velocity = loc;
        this.diameter = 50;

        this.bee = new Image();
        this.bee.src = "media/bee.gif"
    }

    update() {
        var distX = this.targetX - this.x;
        var distY = this.targetY - this.y;
        this.x += distX / this.velocity;
        this.y += distY / this.velocity;

    }
}