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

            this.validateLineColumn(line);
        });

        this.validateDimension(lines);
    }

    validateLineColumn(line) {
        line.forEach( el => {
            if(!Number.isInteger(el)) {
                throw new Error('Matrix only supports integer elements');
            }
        });
        
    }

    validateDimension(lines) {
        lines.reduce((dimension, column) => {
            if(dimension && column.length !== dimension) {
                throw new Error(`Dimension mismatch (${dimension} != ${column.length})`);
            }
            dimension = column.length;
            return dimension;
        }, 0);
    }
}