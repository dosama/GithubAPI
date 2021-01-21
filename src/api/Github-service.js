import Config from '../config';
import axios from 'axios';

let githubService = {};
const API =  `${Config.api.URL}`;

githubService.getGithubDetails = (username) => {
    return axios.get(API+`users/${username}/gists`);
    //return axios.get(API+`gists`);
  };

  githubService.getGistForks = (gitsId) => {
    return axios.get(API+`gists/${gitsId}/forks`);
  };


 export default githubService;