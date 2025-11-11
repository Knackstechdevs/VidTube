export const API_KEY = 'AIzaSyDyafU4IvZ6JexMw_5mgSDcTZR7-susErA'

export const value_converter = (value) => {
    if(value >= 1000000000) {
        return Math.floor(value / 1000000000) + 'B';  // (value / 1000000000).toFixed(1) + 'B';
    } else if(value >= 1000000) {
        return Math.floor(value / 1000000) + 'M';   // we can do it like this or like this
    } else if(value >= 1000) {
        return Math.floor(value / 1000) + 'K';
    } else {
        return value.toString();
    }
}