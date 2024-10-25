

const api = new CountryApi();


const form = document.querySelector("form");


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const countryName = document.getElementById('countryInput').value.trim();
    const countryInfo = await api.getName(countryName);

    displayCountryCard(countryInfo);
})



function displayCountryCard(countryInfo){


    const capital = document.querySelector('.capital');
    capital.textContent = countryInfo.capital;
  

    const languages = document.querySelector('.languages');
    languages.textContent =  countryInfo.languages;
   

    const currency = document.querySelector('.currency');
    currency.textContent = countryInfo.currency;



    const flagImg = document.querySelector('img');
    flagImg.src = countryInfo.flagUrl;
    flagImg.alt = `Flag of ${countryInfo.name || 'Country'}`;
   

}



