import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {axiosInstance} from "./../utilities/configureAxios";

const logger = createLogger();
//how thunk helping
const configMiddlewares = () => {
    const middlewares = [
        thunk.withExtraArgument({
            axios: axiosInstance //why ?
        })
    ]

    return middlewares;//arr return??
}
export default configMiddlewares();