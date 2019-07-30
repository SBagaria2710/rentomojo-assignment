import axios from 'axios';
import {API_HOST} from "../constants/config";
import {IRequest} from '../interfaces/User'

export function getUsers(callback) {
    let userData;
    axios.get(API_HOST+'/users').then(res => {
        if(res.status === 200) {
            userData = res.data.map(user => ({
                userId: user.id,
                userName: user.name,
                companyName: user.company.name
            }))
        }
        callback(userData)
    }).catch(err => {
        console.error(err)
    })
}

export function getPosts(req:IRequest, callback) {
    let userPosts;
    axios.get(API_HOST+`/posts?userId=${req.userId}&skip=${req.skip}&limit=${req.limit}`).then(res => {
        if(res.status === 200) {
            userPosts = res.data.map(post => ({
                userId: post.userId,
                postId: post.id,
                postTitle: post.title,
            }))
        }
        callback(userPosts)
    }).catch(err => {
        console.error(err)
    })
}

export function getPost(postId:number, callback) {
    let post;
    axios.get(API_HOST+`/posts/${postId}`).then(res => {
        if(res.status === 200) {
            callback(res.data)
        }
    }).catch(err => {
        console.error(err)
    })
}

export function getComments(postId:number, callback) {
    let comments;
    axios.get(API_HOST+`/comments?postId=${postId}`).then(res => {
        if(res.status === 200) {
            comments = res.data.map(comment => ({
                commentId: comment.id,
                commentName: comment.name,
                commentBody: comment.body
            }))
        }
        callback(comments)
    }).catch(err => {
        console.error(err)
    })
}

export function deletePost(postId:number, callback) {
    axios.delete(API_HOST+`/posts/${postId}`).then(res => {
        if(res.status === 200) {
            callback()
        }
    }).catch(err => {
        console.error(err)
    })
}