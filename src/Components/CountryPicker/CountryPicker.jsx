import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

const CountryPicker = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {        
        (async () => setCountries(await fetchCountries))();
    }, [setCountries])
    
    return (
        <FormControl>
            <NativeSelect>
                {/* {countries.map((cn) => {
                    <option value={cn.value}>{cn.value}</option>
                })} */}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;
