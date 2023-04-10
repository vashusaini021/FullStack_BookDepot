import { axios_obj } from '../http-common.js';

class BookService {

    searchBook(title) {
        return axios_obj.get(`books/title/${title}`)
    }

}

export default new BookService();