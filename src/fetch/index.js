const getLocation = async () => {
    const url ='https://api-g.weedmaps.com/wm/v2/location?include%5B%5D=regions.listings&latlng=33.666614%2C-117.756295';
    const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      };
    const response = await fetch(url, options);
    const data = await response.json;
    return data;
}

export default getLocation;