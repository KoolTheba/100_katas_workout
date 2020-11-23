// https://www.codewars.com/kata/59d0ee709f0cbcf65400003b
// #fundamentals #strings #objects #arrays

const byState = (str) => {
    const stateDicc = {
        'AZ': 'Arizona',
        'CA': 'California',
        'ID': 'Idaho',
        'IN': 'Indiana',
        'MA': 'Massachusetts',
        'OK': 'Oklahoma',
        'PA': 'Pennsylvania',
        'VA': 'Virginia'
    }

    const cleanString = str.replace(/\n+$/, "")

    let data = {}
    cleanString.split('\n').map(el => el.split(',')).forEach(element => {
        const state = element[2].split(' ').slice(-1).join(' ')
        const city = element[2].split(' ').slice(0, -1).join(' ')
        const stateName = stateDicc[state]

        if(!data[stateName]) {
            data[stateName] = [];
        }

        data[stateName].push(`..... ${element[0]}${element[1]}${city} ${stateName}`)
    });

    const orderedData = Object.keys(data).sort()

    const notebook = orderedData.map(prop => `${prop}\r\n${data[prop].sort().join('\r\n')}\r\n `).join('')

    return notebook.trim()
}
