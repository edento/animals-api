import {App} from './app';
import {Dal} from './dal/dal';
require('log-timestamp');
const app = App.getInstance();
const dal = Dal.getInstance();

const port = process.env.PORT || 4000;
app.listen(port);
dal.connect();