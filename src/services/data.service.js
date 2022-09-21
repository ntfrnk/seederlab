import { api } from '../services/api.service';

const Data = {

    getData: () => {
        return api.get({
            endpoint: 'site?load=groups.data,data'
        });
    },

    getNavigation: () => {
        return api.get({
            endpoint: 'pages?ordering=ordering,asc'
        });
    }

}

export default Data;