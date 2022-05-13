function asterisk(rows) {
    const height = rows;
    let result = '';

    for (let i = 0; i < height; i++) {

        for (let j = 0;  j < i; j++) {
            result += '*';
        }
        result += '\n';
    }
    console.log(result);
}

asterisk(50);