import { Article } from '../models/article.model';
import { data } from './seed';

export class ArticleData {
  getData(): Article[] {
      const articles: Article[] = data.map(article => {
          return new Article(
              article.title,
              article.description,
              article.author,
              article.imageUrl
          );
      });
      return articles;
  }
}
