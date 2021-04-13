import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let dynamicUrl = url;

    if(country) {
        dynamicUrl = `${url}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(dynamicUrl);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (e) {
        return e;
    }
}

export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((daily) => ({
            confirmed: daily.confirmed.total,
            deaths: daily.deaths.total,
            date: daily.reportDate,
        }));

        return modifiedData;
    } catch(e) {
        return e;
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch(e) {
        return e;
    }
}