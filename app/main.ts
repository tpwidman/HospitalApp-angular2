import {bootstrap}    from 'angular2/platform/browser' // import bootstrap
import {AppComponent} from './app.component' // import the component we just created
import { APP_ROUTER_PROVIDERS } from './app.routes';
// finally bootstrap it. 
bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS
]); 
try {

} catch (error) {
    
}(err => console.error(err));