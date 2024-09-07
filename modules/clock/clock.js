exports.func = function () {
    const now = new Date();
    const offset = 9 * 60 * 60 * 1000;
    const japanTime = new Date(now.getTime() + offset);
    console.log(japanTime);

    return japanTime;
};