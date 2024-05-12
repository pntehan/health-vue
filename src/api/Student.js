import { get, post } from "../utils/request";

export const login = query => {
  return post("/student/login", query)
}

export const updateUser = query => {
  return post("/student/updateUser", query)
}

export const initHome = query => {
  return get("/student/initHome", query)
}

export const getArticle = query => {
  return post("/student/getArticle", query)
}

export const getArticles = query => {
  return get("/student/getArticles", query)
}

export const initExam = query => {
  return get("/student/initExam", query)
}

export const getRecords = query => {
  return post("/student/getRecords", query)
}

export const addRecord = query => {
  return post("/student/addRecord", query)
}

export const initAnnouncement = query => {
  return get("/student/initAnnouncement", query)
}

export const initBook = query => {
  return get("/student/initBook", query)
}

export const getBooks = query => {
  return post("/student/getBooks", query)
}

export const addBook = query => {
  return post("/student/addBook", query)
}

export const cancelBook = query => {
  return post("/student/cancelBook", query)
}

export const initConsult = query => {
  return post("/student/initConsult", query)
}

export const addConsult = query => {
  return post("/student/addConsult", query)
}

export const initFeedback = query => {
  return post("/student/initFeedback", query)
}

export const addFeedback = query => {
  return post("/student/addFeedback", query)
}

export const initStar = query => {
  return post("/student/initStar", query)
}

export const addStarTeacher = query => {
  return post("/student/addStarTeacher", query)
}

export const addStarArticle = query => {
  return post("/student/addStarArticle", query)
}

export const checkComment = query => {
  return post("/student/checkComment", query)
}

export const addComment = query => {
  return post("/student/addComment", query)
}

export const showComment = query => {
  return post("/student/showComment", query)
}
