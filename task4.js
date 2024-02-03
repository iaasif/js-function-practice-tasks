function count_zero(x) {
    let count = 0;
    for (let num of x) {

        if (num === 0) {
            count++;
        }
    }

    console.log(count);
}

arr = [0, 0, 1, 0, 1];

count_zero(arr);