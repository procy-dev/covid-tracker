import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (e) {
        console.log("error:", e);
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
        console.log("error:", e);
    }
}

export const fetchCountries = async () => {
    try {
        const response = await axios.get(`${url}/countries`);

        return response.data;
    } catch(e) {
        console.log("error:", e);
    }
}