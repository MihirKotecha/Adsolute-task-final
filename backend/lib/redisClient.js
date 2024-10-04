import { createClient } from 'redis';

const redisClient = createClient({
    url: 'redis://localhost:6379', // Adjust this based on your setup
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
    try {
        await redisClient.connect();
        console.log('Connected to Redis server successfully');
    } catch (error) {
        console.error('Could not connect to Redis server:', error);
    }
})();

export default redisClient;
