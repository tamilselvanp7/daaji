// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

export default async function getCall(req, res) {
  const { body } = req;
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const URL = `${baseUrl}${body.url}`;
  
  const response = await axios.get(URL);
  return res.status(200).json(response.data);
}
