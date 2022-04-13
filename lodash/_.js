const _ = {
    clamp(number, lower, upper){
            const lowerClampedValue = Math.max(number, lower);
            const clampedValue = Math.min(lowerClampedValue, upper);
            return clampedValue;
        },
    inRange(number, start, end){
        if(end === undefined){
            end = start;
            start = 0;
        }
        if(start > end){
            let temp = start;
            start = end;
            end = temp;
        }
        if(number < start){
            return false;
        }else if(number >= end){
            return false;
        }else{
            return true;
        }
    },
    words(str){
        const arr = str.split(' ');
        return arr;
    },
    pad(string, length){
        if(string.length < length){
            const frontPadding = Math.floor((length - string.length)/2);
            const endPadding = length - string.length - frontPadding;
            const paddedString = `${' '.repeat(frontPadding)}${string}${' '.repeat(endPadding)}`;
            return paddedString;
        }else{
            return string;
        }
    },
    has(object, key){
        const hasValue = 
    }

    };
// Do not write or modify code below this line.
module.exports = _;