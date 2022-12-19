import Redis from 'ioredis';

// let client = new Redis("redis://default:*****@global-upright-monarch-30897.upstash.io:30897");
// client.set('foo', 'bar');

const redis = new Redis(process.env.REDIS_URL!);

export default redis;
