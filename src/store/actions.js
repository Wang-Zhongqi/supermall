export default {
    aUpdateInfo(context, message) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('我在调用 --- ' + message);
                resolve('ojbk')
            }, 1000)
        })
    }
}