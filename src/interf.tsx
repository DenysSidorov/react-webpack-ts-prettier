console.log(13212312);

interface React {
    readonly id: string,
    color?: string, // not required
    size: {
        width: number,
        height: number
    }
}

const r: React = {
    id: '34',
    size: {
        width: 23,
        height: 34
    },
    color: '123'
}

r.size.height = 12312312;
// r.id = '3';
console.log(r);

const r2 = {} as React;
console.log(r2);


interface ReactWithValue extends React{
    getValue: () => number
}

const Shape: ReactWithValue = {
    id: '43',
    size: {
        width: 2,
        height: 3
    },
    getValue() {
        return this.size.height * this.size.width
    }
}
console.log(Shape);

//////

interface IClock {
    time: Date
    setTime(date: Date): void
    setDoubleTime: () => number
}

class MyClock implements IClock {

    time: Date = new Date();

    setTime(date: Date): void {
        this.time = date;
    }
    setDoubleTime(){
        return 3
    }
}

interface IStyles {
    margin: number
    [key: string]: string | number
}

const Header: IStyles = {
    margin: 123,
    width: '3412'
}


