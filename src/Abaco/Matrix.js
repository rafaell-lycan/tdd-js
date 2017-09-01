export class Matrix {

    constructor(lines) {
        this.validateLines(lines);
        this.lines = lines;
    }

    validateLines(lines) {
        if(!(lines && lines.length)) {
            throw new Error('Matrix lines cannot be empty');
        }

        lines.forEach(line => {
            if(!Array.isArray(line)) {
                throw new Error('Matrix line must be an array');
            }

            this.validateLineElement(line);
        });
    }

    validateLineElement(line) {
        line.forEach( el => {
            if(!Number.isInteger(el)) {
                throw new Error('Matrix only supports integer elements');
            }
        });
        
    }
}