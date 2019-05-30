import urls from './urls'
import { t } from 'testcafe';

export default {
    navigator: async stage => {
        await t.navigateTo(urls[stage]);
    }
}
