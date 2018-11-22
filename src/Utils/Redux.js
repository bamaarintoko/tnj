import {
    createReactNavigationReduxMiddleware,
    reduxifyNavigator,
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);
const navigationPropConstructor = reduxifyNavigator('root');

export { middleware, navigationPropConstructor };