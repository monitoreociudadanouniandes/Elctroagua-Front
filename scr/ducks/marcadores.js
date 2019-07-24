import axios from 'axios';
import _ from 'lodash';
import { timeParse, scaleTime } from 'd3';

const ROOT_URL =
    process.env.NODE_ENV === 'production'
        ? 'https://monitoreociudadano.uniandes.edu.co:8000'
        : 'https://monitoreociudadano.uniandes.edu.co:8000';

export const FETCH_MARKERS = 'FETCH_MARKERS';
const FILTER_MARKERS = 'FILTER_MARKERS';
const AVISO_SELECCIONAR_MAS_MARCADORES = 'AVISO_SELECCIONAR_MAS_MARCADORES';
const QUITAR_AVISO_SELECCIONAR_MAS_MARCADORES =
    'QUITAR_AVISO_SELECCIONAR_MAS_MARCADORES';

export const fetchMarkers = () => dispatch => {
    axios.get(`${ROOT_URL}/registros_geo`).then(res => {
        dispatch({
            type: FETCH_MARKERS,
            payload: res.data.features
        });
    });
};

export const filterMarkers = filteredMarkers => {
    filteredMarkers = filteredMarkers.map(marker => {
        return marker.properties;
    });
    const object = { data: filteredMarkers };
    filteredMarkers = fillNulls(object);
    console.log(object);
    return {
        type: FILTER_MARKERS,
        payload: filteredMarkers
    };
};

export const avisoSeleccionarMarcadores = () => {
    return {
        type: AVISO_SELECCIONAR_MAS_MARCADORES
    };
};

export const quitarAvisoSeleccionarMarcadores = () => {
    return {
        type: QUITAR_AVISO_SELECCIONAR_MAS_MARCADORES
    };
};

const INITIAL_STATE = {
    original_markers: [],
    filtered_markers: [],
    aviso_seleccionar_mas_marcadores: true
};

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_MARKERS:
            return { ...state, original_markers: payload };
        case FILTER_MARKERS:
            return { ...state, filtered_markers: payload };
        case AVISO_SELECCIONAR_MAS_MARCADORES:
            return { ...state, aviso_seleccionar_mas_marcadores: true };
        case QUITAR_AVISO_SELECCIONAR_MAS_MARCADORES:
            return { ...state, aviso_seleccionar_mas_marcadores: false };
        default:
            return state;
    }
};

// order by date
// coger minimum y maximum de la date
// Hacer un objecto de fechas con arrays.
// recorrer el arreglo ordenado por date,
// si el actual ya tiene fecha agregarlo al array de la propiedad del objecto
// Si no, pues crear un array con ese
// Recorrer las propiedades de ese objecto calculando un array final por propiedad que tenga en cada casilla el promedio de su bucket y la length de la cual se calculo el promedio
// setstate.
export const fillNulls = object => {
    // Para la line/bar chart:
    const other = Object.assign({}, object);
    const { data } = object;
    console.log(other.data);
    object.original_data = data;
    object.cantidad = data.length;

    data.sort((a, b) => {
        const date1 = new Date(a.date);
        const date2 = new Date(b.date);
        if (date1 < date2) {
            return -1;
        }
        return 1;
    });

    const min = data[0];
    const max = data[data.length - 1];

    const hash = {};

    // Los mete en el hash
    data.forEach(point => {
        const date = new Date(point.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const string = `${day}/${month}/${year}`;

        if (hash[string]) {
            hash[string].push(point);
        } else {
            hash[string] = [point];
        }
    });

    const final = [];
    Object.keys(hash).forEach(key => {
        const final_object = {};
        final_object.items = hash[key].length;
        final_object.name = key;
        final_object.pH = _.meanBy(hash[key], o => parseFloat(o.pH));
        final_object.od = _.meanBy(hash[key], o => parseFloat(o.od));
        final_object.hg = _.meanBy(hash[key], o => parseFloat(o.hg));
        final_object.temp = _.meanBy(hash[key], o => parseFloat(o.temp));
        final_object.conduct = _.meanBy(hash[key], o => parseFloat(o.conduct));
        final_object.date = hash[key][0].date;
        final.push(final_object);
    });

    object.data = final;

    const nulls = [];
    for (var i = 0; i < final.length; i++) {
        nulls.push(final[i]);
        if (i < final.length - 2) {
            let actual_date = final[i].date;
            const nulls_to_create =
                days_between(final[i].date, final[i + 1].date) - 1;
            for (var j = 1; j <= nulls_to_create; j++) {
                const next_date = new Date(actual_date);
                next_date.setDate(next_date.getDate() + 1);
                const year = next_date.getFullYear();
                const month = next_date.getMonth() + 1;
                const day = next_date.getDate();
                const string = `${day}/${month}/${year}`;
                nulls.push({ name: string });
                actual_date = next_date;
            }
        }
    }

    object.data = nulls;

    // Para el scatter chart:
    var timeScale = scaleTime()
        .domain([min.date, max.date])
        .range([0, 700]);

    object.original_data = object.original_data.map(point => {
        point.x = timeScale(point.date);
        const year = point.date.getFullYear();
        const month = point.date.getMonth() + 1;
        const day = point.date.getDate();
        point.name = `${day}/${month}/${year}`;
        return point;
    });
    const other3 = Object.assign({}, object);
    console.log('2', other3);
    return object;
};

// Helpers:
function days_between(date1, date2) {
    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms);

    // Convert back to days and return
    return Math.round(difference_ms / ONE_DAY);
}
