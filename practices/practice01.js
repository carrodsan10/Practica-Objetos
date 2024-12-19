export class Rectagle {
    constructor(width, height) {
        this.changeDimensions(width, height)
    }

    changeDimensions(width, height) {
        this.width = this.ifValid(width) ? width : 1
        this.height = this.ifValid(height) ? height : 1
    }

    calculateArea() {
        return this.width * this.height
    }

    copy() {
        return new Rectagle(this.width, this.height)
    }

    compare(otherRectangle) {
        const currentArea = this.calculateArea()
        const otherArea = otherRectangle.calculateArea()

        if (currentArea > otherArea) {
            return 'greater'
        } else if (currentArea < otherArea) {
            return 'smaller'
        } else {
            return 'equal'
        }

    }

    ifValid(dimension) {
        if (typeof dimension === 'number' && dimension > 0) {
            return true
        } else {
            return false
        }
    }
}
