const API_PREFIX = "https://hacker-news.firebaseio.com/v0/";

export function fetchApi(suffix) {
    return fetch(`${API_PREFIX}${suffix}.json?print=pretty`)
        .then(res => res.json());
}

export function fetchTopStories() {
    return fetchApi("topstories");
}

export function fetchItem(id) {
    return fetchApi(`item/${id}`);
}
