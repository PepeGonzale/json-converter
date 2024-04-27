module.exports = {
    splitJson: (json) => {
        let files = JSON.parse(json);
        let keys = Object.keys(files[0])
        const header = keys.join(',');
        let csvLines = files.map(file => {
            return keys.map(key => file[key]).join(',');
        })
        const csvContent = [header, ...csvLines].join('\n');
        console.log(csvContent)
        return csvContent
    }
}