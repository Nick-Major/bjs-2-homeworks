
function parseCount(value) {
    const result = Number.parseFloat(value);
    if (Number.isNaN(result) === true) {
        const pcErr = new Error("Невалидное значение");
        throw pcErr;
    } else {
        return result;
    } 
}

function validateCount(value) {
	try {
        const result = parseCount(value);
        return result;
    } catch (pcErr) {
        return pcErr;
    }

}

/* class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a > b + c) || (b > a + c) || (c > a + b)) {
            const error = new Error("Треугольник с такими сторонами не существует");
            throw error;
        } else {
            this.perimeter = a + b + c;
            const p = this.perimeter * 0.5;
            const square = Math.sqrt(p * (p - a) * (p - b) * (p - c));
            const roundItUp = square.toFixed(3);
            this.area = parseFloat(roundItUp);
        }

    }

    getPerimeter () {
        if (error) {
            const prErr = new Error("Ошибка! Треугольник не существует");
            throw prErr;
        } else {
            return this.perimeter;
        }
    }

    getArea () {
        if (error) {
            const arErr = new Error("Ошибка! Треугольник не существует");
            throw arErr;
        } else {
            return this.area;
        }
    }
}

function getTriangle(a, b, c) {
    try {
        const newTriangle = new Triangle(a, b, c);
        return newTriangle;
    } catch (error) {
        const errorObj = {
           getArea () {
            const msg = "Ошибка! Треугольник не существует";
            return msg;
           },

           getPerimeter () {
            const msg = "Ошибка! Треугольник не существует";
            return msg;
           }
        };

        return errorObj;
    }   
} */





class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        
        if ((a > b + c) || (b > a + c) || (c > a + b)) {
            const error = new Error("Треугольник с такими сторонами не существует");
            throw error;
        }
        
    }

    get perimeter () {
        this.perimeter = this.a + this.b + this.c;
        return this.perimeter;
    }

    get area () {
        const p = this.perimeter * 0.5;
        const square = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        const roundItUp = square.toFixed(3);
        this.area = parseFloat(roundItUp);
        return this.area;
    }
}

function getTriangle(a, b, c) {
    try {
        const newTriangle = new Triangle(a, b, c);
        return newTriangle;
    } catch (error) {
        const errorObj = {
           getArea () {
            const msg = "Ошибка! Треугольник не существует";
            return msg;
           },

           getPerimeter () {
            const msg = "Ошибка! Треугольник не существует";
            return msg;
           }
        };

        return errorObj;
    }   
}