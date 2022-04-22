
import { instance } from "./"

export const charactersAPI = {
  getAllCharacters() {
    return instance.get(`character`).then(res => res);
  },
  getCharacterById(id) {
    return instance.get(`character/${id}`).then(res => res);
  },
  getMultiplyCharactersByIds(ids) {
    return instance.get(`character/${[...ids]}`).then(res => res);
  },
  getFilteredCharacters(name = null, status = null, species = null, type = null, gender = null) {
    return instance.get(`character/?`
      + (name === null ? '' : `&name=${name}`)
      + (status === null ? '' : `&status=${status}`)
      + (species === null ? '' : `&species=${species}`)
      + (type === null ? '' : `&type=${type}`)
      + (gender === null ? '' : `&gender=${gender}`)
    ).then(res => res);
  }
}