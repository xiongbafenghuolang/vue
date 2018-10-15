module.exports={
    entry:'./main.js',
    output:{
        path:_dirname,
        filename:'build.js'
    },
    module:{
        loaders:{
            // {test:/\.vue$/,loader:'vue'}
        }
    }
};