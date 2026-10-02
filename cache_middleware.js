
const cache = {}

const TTL = 60 * 1000

function cacheMiddleware(req, res, next) {
    const key = req.originalUrl

    const entry = cache[key]

    if (entry) {
        const age = Date.now() - entry.createdAt

        if (age < TTL) {
            res.set('X-Cache', 'HIT')
            return res.json(entry.data)
        }
    }

    res.set('X-Cache', 'MISS')
    next()
}

module.exports = {
    cache,
    cacheMiddleware
}