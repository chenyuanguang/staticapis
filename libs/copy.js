let fs = require("fs")
let deleteDir = require("./deleteDir")



function Copy(originDir, targetDir) {
    fs.access(targetDir, fs.constants.F_OK, (err) => {
        if (err) {
            fs.mkdirSync(targetDir)
        } else {
            deleteDir(targetDir, false)
        }
        fs.readdir(originDir, (err, data) => {
            if (err) {
                console.log(err)
            }
            data.forEach((i) => {
                let fileUrl = originDir + "/" + i
                let fileTarget = targetDir + "/" + i
                fs.open(fileUrl, "r+", (err, fd) => {
                    fs.fstat(fd, (err, stats) => {
                        if (stats.isDirectory()) {
                            Copy(fileUrl, fileTarget)
                        } else {
                            fs.copyFile(fileUrl, fileTarget, (err) => {
                                if (err) {
                                    console.log(err)
                                }
                            })
                        }
                    })
                })

            })
        })
    });
}


module.exports = Copy