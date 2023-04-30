import axios, { Method } from "axios";

const baseUrl = `${process.env.REACT_APP_API_BASEURL}`;

const createHeaders = () => {
  return {
    "content-type": "application/json"
  };
};

export const fetchHttp = async <TResponse, TPayload>(
  url: string,
  method: Method,
  reqBody?: TPayload
): Promise<TResponse> => {
  try {
    const response = await axios(`${baseUrl}/${url}`, {
      method: method,
      headers: createHeaders(),
      data: {
        ...(reqBody && reqBody)
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data?.error) {
        throw new Error(error.response.data.error);
      }
    }
    throw new Error("Unknown server error");
  }
};
