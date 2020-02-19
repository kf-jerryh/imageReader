const Jimp = require('jimp')

const hexaCodes = {
    '2967666687': 'ocean',
    '8388863': 'forest',
    '2431553791': 'plains'
}

const colors = []

Jimp.read('image1.png', (err, image) => {
    if(err) throw err // ./gqyheuiqgsuehiegshjkesjhkhjegkshjgeshjkgejhkbeshjkgshkgeshkbgjeshgkeghkegkhgekhjeskhjgeskhjhes.psdgq.svg
    // console.log(image.bitmap)
    let pixel = new Array(image.bitmap.width).fill([])
    for(let i= 0; i<image.bitmap.width; i++) {
        for(let j=0; j< image.bitmap.width; j++) {
            pixel[i].push({
                biome: hexaCodes[image.getPixelColor(i, j)]
            })
            // console.log(image.getPixelColor(i, j))
        }
    }

    console.log(pixel)
})