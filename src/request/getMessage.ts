import axios from "axios"

interface ResponseData {
  id: number
  title: string
  content: string
}

interface DataProps {
  idInstance: string
  apiTokenInstance: string
}

export const getToApi = async (
  data: DataProps
): Promise<ResponseData[] | void> => {
  try {
    const response = await axios.get<ResponseData[]>(
      `${import.meta.env.VITE_API_URL}/waInstance${
        data.idInstance
      }/receiveNotification/${data.apiTokenInstance}?receiveTimeout=5`
    )

    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Ошибка при выполнении GET-запроса:", error)
  }
}
