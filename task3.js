function make_avg(arr, size) {
    let sum = 0;
    for (let itterVar of arr) {
        sum += itterVar;
    }
    console.log(sum / size);
}
newArr = [10, 2, 4]
size = 3;
make_avg(newArr, size);