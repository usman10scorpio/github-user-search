import { get } from "./http.service";
import { URL } from "../util/constants";

const searchGitHubUsers = `${URL.SEARCH}`;

export const searchApi = async (userName: string, pageNumber: number = 1) => {
    const pageSize: number = 9;
    return get(`${searchGitHubUsers}?q=${userName.trim().toLowerCase()}&page=${pageNumber}&per_page=${pageSize}`);
};