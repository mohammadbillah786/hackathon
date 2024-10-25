class CountryApi {

    constructor() {
        this.apiUrl = 'https://restcountries.com';
    }



    async getName(name) {
        try {

            const response = await axios.get(`${this.apiUrl}/v3.1/name/${name}`);
           

            const countryData = response.data;
            const currencyData = countryData[0].currencies
            for (const[key,value] of Object.entries(currencyData)){
                console.log(`${key}: ${value}`);
            }

            const currencyKey = Object.keys(currencyData)[0];
            const currencyName = currencyData[currencyKey].name;


            const languagesData = countryData[0].languages;
            const languages = Object.values(languagesData).join(', ');

            

            const result = {
                
                capital: `${countryData[0].capital}`,
                currency: `${currencyName}`,
                languages: `${languages}`,
                flagUrl: countryData[0].flags.svg,
               
            };
            
            console.log(result);
        
            return result;

        } catch (error) {

            console.error(error);
        }


    }



}

