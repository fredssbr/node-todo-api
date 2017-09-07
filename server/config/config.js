var env = process.env.NODE_ENV || 'development';
console.log('env ******', env);

if(env === 'development' || env === 'test'){
    var config = require('./config.json');
    var envConfig = config[env];
    //Gets all the keys of an object and return them as an array
    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
}