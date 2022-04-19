import express, { Application   } from 'express';

 export class App {
    app: Application;

    constructor(
       private port?: number | string
    ) {
        this.app = express();
        this.settings();
    }


   private settings(){
       this.app.set('port', this.port  || process.env.PORT  || 3000);
   }

   async listen() {
     await this.app.listen(this.app.get('port'));
        console.log('Server en el puerto: ', this.app.get('port')); 
   }
}