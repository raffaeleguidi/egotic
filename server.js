var Server = require("upnpserver");

module.exports = {

    init: function() {

        var server=new Server({ httpPort: 10000 /* configuration, see below */ }, [
           '/Users/rough',
        //    { path: '/home/rough/images' }
        //    ,
        //    { path: '/media/movies', mountPoint: '/My movies'},
        //    { path: '/media/albums', mountPoint: '/Personnal/My albums', type: 'music' }
        ]);

        server.start();
    }

}