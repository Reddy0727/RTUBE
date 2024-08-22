import axios from "axios"
export const BASE_URL = 'https://youtube-v3-alternative.p.rapidapi.com'
const options = {
    params: {
        maxResults: 50,
      },
	headers: {
		'x-rapidapi-key': '1c7a831bc1msh92605156f3e9b84p150886jsn9a4d034f6d59',
 'x-rapidapi-host': 'youtube-v3-alternative.p.rapidapi.com'
	}
};

export const fetchApi = async (url) => {
    const res = await axios.get(`${BASE_URL}/${url}`,options)
    return res.data
}