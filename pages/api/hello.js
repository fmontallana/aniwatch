// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAnimeList } from "@/functions/getAnimeFn"

export default async function handler(req, res) {
  const data = await getAnimeList("trending")
  res.status(200).json({ data })
}
