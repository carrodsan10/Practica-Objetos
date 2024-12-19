Array.prototype.calculateAverage = function() {
    if (this.length === 0) return 0

    const sum = this.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    )
    return sum / this.length
}