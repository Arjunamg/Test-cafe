export default {
    name : () => {
        const time = new Date().getTime();
        return `Order-${time.toString().substr(0, 10)}`;
    }
};