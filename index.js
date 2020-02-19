const Jimp = require('jimp')

const fs = require('fs')

const hexaCodes = {
    '2967666687': 'ocean',
    '8388863': 'forest',
    '2431553791': 'plains'
}

const colors = []

let content = 'module.exports = {\n'



Jimp.read('image1.png', (err, image) => {
    if(err) throw err // ./gqyheuiqgsuehiegshjkesjhkhjegkshjgeshjkgejhkbeshjkgshkgeshkbgjeshgkeghkegkhgekhjeskhjgeskhjhes.psdgq.svg
    // console.log(image.bitmap)
    let pixel = new Array(image.bitmap.width).fill([])
    for(let i= 0; i<image.bitmap.width; i++) {
        content += `\t${i}: [\n`
        for(let j=0; j< image.bitmap.width; j++) {
            // pixel[i].push({
            //     biome: hexaCodes[image.getPixelColor(i, j)]
            // })
            // console.log(image.getPixelColor(i, j))
            content += `\t\t{\n\t\t\tbiome: ${hexaCodes[image.getPixelColor(i, j)]}\n\t\t},\n`
        }

        content += '\t],'
    }

    content += '}'

    fs.writeFile('./map.js', content, function(err) {
        if(err) throw err
    })
})