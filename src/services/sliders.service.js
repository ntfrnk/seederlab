import { api } from '../services/api.service';

const Sliders = {

    getAll: () => {
        return api.get({
            endpoint: 'sliders'
        });
    }

}

export default Sliders;