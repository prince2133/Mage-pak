const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'PREFIX', value: '/' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'AUTO_VOICE', value: 'false' },
    { key: 'MODE', value: 'private' },
    { key: 'AUTO_STICKER', value: 'false' },
    { key: 'AUTO_REPLY', value: 'false' },
    { key: 'ALLWAYS_OFFLINE', value: 'true' },
    { key: 'READ_MESSAGE', value: 'false' },
    { key: 'ANTI_LINK', value: 'false' },
    { key: 'ANTI_LINKK', value: 'false' },
    { key: 'AUTO_REACT', value: 'false' },
    { key: 'OWNER_REACT', value: 'false' },
    { key: 'ANTI_BOT', value: 'false' }
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
                                                      
