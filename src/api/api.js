import axios from "axios";

const url = process.env.REACT_APP_DB_URL

export const postTodo = async (data) => {
  return await axios.post(`${url}/todo.json`, data)
}

export const fetchTodo = async () => await axios.get(`${url}/todo.json`);

export const deleteTodo = async (id) => {
  return await axios.delete(`${url}/todo/${id}.json`)
}
export const editTodo = async (id, isChecked) => {

  let res;
  try {
    res = await axios.put(`${url}/todo/${id}/checked.json`, isChecked)

  } catch (e) {
    console.log(e)
  }


  return res

}



