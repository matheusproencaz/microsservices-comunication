const LogMiddleware = (req, res) => {
    const startTime = new Date();

    function logAfterResponse() {
        const endTime = new Date();
        const responseTime = endTime - startTime;
        console.info(`${endTime.toLocaleString()} | Trying to [${req.method}] - ${req.originalUrl} With status: ${res.statusCode} | Response Time: ${responseTime}ms`);
    }
    
    res.on('finish', logAfterResponse);
}

export default LogMiddleware;