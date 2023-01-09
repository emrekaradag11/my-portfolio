import articles from '../../db/models/articles.model';

export default async function handler(req, res) {
  const data = await articles.findAll()
  res.status(200).json({
    data: data,
  });
}