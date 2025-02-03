import axios from "axios"

interface PostData {
  idInstance: string
  apiTokenInstance: string
  chatId: string
  message: string
}

interface ResponseData {
  idMessage: string
}

export const postToApi = async (
  data: PostData
): Promise<ResponseData | void> => {
  try {
    const response = await axios.post<ResponseData>(
      `${import.meta.env.VITE_API_URL}/waInstance${
        data.idInstance
      }/sendMessage/${data.apiTokenInstance}`,
      { chatId: data.chatId + "@c.us", message: data.message }
    )

    return response.data
  } catch (error) {
    console.error("Ошибка при выполнении POST-запроса:", error)
  }
}
