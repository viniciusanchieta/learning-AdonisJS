import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from 'App/Models/Post'

export default class PostsController {
  public async index() { //consult all
    const data = await Post.all();

    return data;
  }

  public async store({ request }: HttpContextContract) { //register
    const data = request.only(['title', 'content']);
    const post = await Post.create(data);

    return post;
  }
}
