export const objTransformer = (obj) => {
  if (obj) {
    return (Object.keys(obj).map((key) => ({...obj[key], id: key})))
  } else return []


}