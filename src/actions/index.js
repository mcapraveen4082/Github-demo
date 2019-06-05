import {GIT_USER, GIT_REPO} from "../constants/index";

export function getUserGit(payload) {
    return { type: GIT_USER, payload }
};

export function getRepo(payload) {
    return { type: GIT_REPO, payload }
};