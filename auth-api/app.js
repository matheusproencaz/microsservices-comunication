import express from 'express';
import * as db from './src/config/db/initialdata';
import UserRoutes from './src/modules/user/routes/UserRoutes';
import ExceptionHandler from './src/middlewares/ExceptionHandler';
import LogMiddleware from './src/middlewares/LogMiddleware';

const app = express();
const env = process.env;
const PORT = env.PORT || 8080;

db.createInitialData();
app.use(express.json());


app.get('/api/status', (req, res) => {
    return res.status(200).json({
        service: 'Auth-API',
        status: "up",
        httpStatus: 200
    });
});

app.use(UserRoutes);
app.use(ExceptionHandler);
app.use(LogMiddleware);
app.listen(PORT, () => {
    console.info(`Server started successfully at port: ${PORT}`)
});

