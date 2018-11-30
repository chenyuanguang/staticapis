let fs = require("fs")

function deleteDir(dir, type) {
    try {
        fs.accessSync(dir, fs.constants.F_OK)
        let data = fs.readdirSync(dir)
        data.forEach((i) => {
            let fileUrl = dir + "/" + i
            let fd = fs.openSync(fileUrl, "r+")
            let stats = fs.fstatSync(fd)

            if (stats.isDirectory()) {
                deleteDir(fileUrl, true)
            } else {
                fs.unlinkSync(fileUrl)
            }
            fs.closeSync(fd)
        })
        if (type) {
            fs.rmdirSync(dir)
        }

    } catch (error) {
        console.log(error)
    }


}
module.exports = deleteDir