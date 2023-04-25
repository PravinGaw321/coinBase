export const baseUrl = 'https://api.coingecko.com/';

let id= null;
export const API_URL ={
    coin_list: 'api/v3/coins/list',
    coin_info: `/api/v3/coins/${id}`,
    // currency_coin: `/api/v3/coins/markets?vs_currency=${country}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
    coin_category_list: 'api/v3/coins/categories/list',
    nft_list: 'api/v3/nfts/list',
    // ntf_info: `https://api.coingecko.com/api/v3/nfts/${id}`,
    exchange_rate: 'api/v3/exchange_rates',
    trending: 'api/v3/search/trending',
    // search_info: `https://api.coingecko.com/api/v3/search?query=${info}`,
    network_status: 'api/v3/ping',
}