import React from 'react';
import { Cards, Chart, CountryPicker } from './Components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({ data });
    }

    handleCountryChange = async (country) => {
        const fetchedData = fetchData(country);
        this.setState({ data: fetchedData, country });
    }

    render() {
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data} country={this.state.country} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} />
            </div>
        );
    }
}

export default App;
