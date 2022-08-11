class PathChecks {
    isImgPath(path) {
        return ['jpg', 'png', 'svg'].includes(path.split('.').pop())
    }

    isVidPath(path) {
        return ['mp4', 'mov'].includes(path.split('.').pop())
    }
}

export default new PathChecks();
