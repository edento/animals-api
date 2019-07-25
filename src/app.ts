import * as express from 'express';
import * as bodyParser from 'body-parser';
import {AnimalController} from "./routes/animal.route";

const TAG = '[App]';

export class App {
    private static instance: App;
    private app: express.Application;

    private constructor() {
        this.app = express();
        this.setMiddleware();
        this.mountRoutes();
    }

    public static getInstance(): App {
        if (!this.instance) {
            this.instance = new App;
        }
        return this.instance;
    }

    private mountRoutes(): void {
        // Add here future routes
        this.app.use('/api/animal', AnimalController);
    }

    private setMiddleware(): void {
        this.app.use(bodyParser.json());
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }

    public async listen(port: any) {
        this.app.listen(port,
            (err) => {
                if (err) {
                    console.error(TAG, `Error listening at port ${port} `, err);
                }
                else {
                    console.log(TAG, `Listening at port ${port}`);
                }
            });
    }


}
