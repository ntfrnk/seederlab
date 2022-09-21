import { api } from '../services/api.service';

const Pages = {

    getAll: () => {
        return api.get({
            endpoint: 'pages'
        });
    },

    getOne: (slug) => {
        return api.get({
            endpoint: `page/${slug}`
        });
    }

}

export default Pages;