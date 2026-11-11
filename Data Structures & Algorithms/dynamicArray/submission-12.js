class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.arr = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
        return;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        const lastFilledIndex = this.arr.findLastIndex((value) => value !== undefined);

        if (lastFilledIndex === this.arr.length - 1) {
            this.resize();
        }

        this.arr[lastFilledIndex + 1] = n;
    }

    /**
     * @returns {number}
     */
    popback() {
        const lastFilledIndex = this.arr.findLastIndex((value) => value !== undefined);

        const res = this.arr[lastFilledIndex];
        this.arr[lastFilledIndex] = undefined;

        return res;
    }

    /**
     * @returns {void}
     */
    resize() {
        this.arr.length *= 2;
        return;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.arr.filter((value) => value !== undefined).length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.arr.length;
    }
}

const temp = new DynamicArray(5);

temp.pushback(1);
// temp.set(0, 0);
temp.pushback(2);
temp.pushback(3);
// temp.get(1);
// temp.getCapacity();
temp.popback();
console.log(temp);
console.log(temp.popback());
console.log(temp);
temp.get(0);

