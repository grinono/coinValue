import counter from './counter';
import post from './post';
import upload from './upload';
import user from './user';
import subscription from './subscription';
import contact from './contact';
import dashboard from './dashboard';
import pageNotFound from './pageNotFound';
import './favicon';
import '../scss/style.scss';

import Feature from './connector';

export default new Feature(counter, dashboard, post, upload, user, subscription, contact, pageNotFound)
