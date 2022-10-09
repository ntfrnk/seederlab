import { api } from '../services/api.service';

const Articles = {

    getAll: () => {
        return api.get({
            endpoint: 'articles'
        });
    },

    getByCategory: (category_id) => {
        return api.get({
            endpoint: `articles?status=on&category_id=${category_id}`
        });
    },

    getOne: (slug) => {
        return api.get({
            endpoint: `article/${slug}`
        });
    }

}

export default Articles;