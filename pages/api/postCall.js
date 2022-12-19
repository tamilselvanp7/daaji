import axios from 'axios';

export default async function postCall(req, res) {
  const { body } = req;
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const URL = `${baseUrl}${body.url}`;
  const { content } = body;

  const response = await axios.post(URL, content);
  return res.status(200).json(response.data);
}