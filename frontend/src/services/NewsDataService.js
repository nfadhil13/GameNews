import http from "../http";
import authHeader from '../services/auth-header';

class NewsDataService {
  getAll() {
    return http.get(`/api/news`);
  }

  async getAllNewsSitemap(){
    const result = await http.get(`/api/news`)
        let array = []
        result.data.forEach((item)=>{
            array.push({
                id_berita: item.id_berita
            })
        })
        
      return array
  }

  getPagination(params) {
    return http.get(`/api/newsPagination/`,{params})
  }

  getAllNewsASC(params, urutkan){
    return http.get(`/api/newsPaginationASC/${urutkan}`,{params});
  }

  getPaginationByKategori(params, kategori) {
    return http.get(`/api/newsPagination/kategori/${kategori}`,{params})
  }

  get(id_berita) {
    return http.get(`/api/news/${id_berita}`);
  }

  getNewsThumbnail(id_berita) {
    return http.get(`/api/news_thumbnail/${id_berita}`);
  }

  getByKategori(kategori) {
    return http.get(`/api/news/kategori/${kategori}`);
  }

  create(data) {
    return http.post(`/api/news`, data, { headers: authHeader() });
  }

  update(id_berita, data) {
    return http.put(`/api/news/${id_berita}`, data, { headers: authHeader() });
  }

  delete(id_berita) {
    return http.delete(`/api/news/${id_berita}`, { headers: authHeader() });
  }

  deleteAll() {
    return http.delete(`/api/news`);
  }

  findByTitle(judul_berita) {
    return http.get(`/api/news?title=${judul_berita}`);
  }

  uploadNewsThumbnail(id_berita, data) {
      return http.put(`/api/news_pict/${id_berita}`, data);
  }

  search(searchString) {
    return http.get(`/api/news/search/${searchString}`);
  }

  searchPagination(searchString, params) {
    return http.get(`/api/newsPagination/search/${searchString}`,{params});
  }

  home(){
    return http.get(`/api/home`);
  }
}

export default new NewsDataService();