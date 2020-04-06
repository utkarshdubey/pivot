if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: process.env.PRODUCTION_DB_URI}     
} else{
    module.exports = {mongoURI: process.env.LOCAL_DB_URI}
}