export default {
    name : () => {
        const time = new Date().getTime();
        return `Order-${time.toString().substr(0, 10)}`;
    },
    random10Dig : () => {
        const time = new Date().getTime();
        return `${time.toString().substr(0, 10)}`;
    },
    random6Dig : () => {
        const time = new Date().getTime();
        return `${time.toString().substr(0, 6)}`;
    }
};