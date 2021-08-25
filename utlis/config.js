export default function getPlatform() {
    let Platform;
// #ifdef APP-PLUS
    Platform = 'APP'
// #endif

// #ifdef H5
    Platform = 'H5'
// #endif

    return  Platform

}