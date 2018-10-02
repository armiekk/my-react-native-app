

import { SecureStore } from 'expo';

// fakeData
import { postList } from './fakeData';

const fetchPost = ({ offset, limit } = { offset: 0, limit: 5 }) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const results = postList.slice(offset, offset + limit);
        const response = {
            data: {
                offset: offset + results.length,
                count: postList.length,
                results,
                limit
            }
        };
        resolve(response)
    }, 1000);
})

const fetchUserDetail = () => new Promise(async (resolve, reject) => {
    const token = await SecureStore.getItemAsync('tokenId');
    if (!token) {
        reject('Uuauthorized.')
    }
    setTimeout(() => {
        const response = {
            data: {
                userName: 'hitevent',
                displayname: 'นายกอไก่ ชอบเที่ยวจัง',
                email: 'user@hitevent.com'
            }
        }
        resolve(response)
    }, 1000);
});

export default { fetchPost, fetchUserDetail };