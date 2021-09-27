enum PostType {
  CONTENT = 'content',
  AUDIO = 'audio',
  VIDEO = 'video',
  POLL = 'poll',
}

interface IPostComments {
  content: string;
  author: string;
  moderated: boolean;
}

interface IPost {
  id: string;
  content: string;
  type: PostType;
  metadatas: Array<string>;
  createdDate: string;
  lastModifiedDate: string;
  comments: Array<IPostComments>;
  creator: string;
}

export class Post implements IPost {
  public id = '';
  public content = '';
  public type = PostType.CONTENT;
  public metadatas = [];
  public createdDate = '';
  public lastModifiedDate = '';
  public comments = [];
  public creator = '';

  constructor(postModel: IPost) {
    this.id = postModel.id;
    this.content = postModel.content;
    this.type = postModel.type;
    this.metadatas = postModel.metadatas;
    this.createdDate = postModel.createdDate;
    this.lastModifiedDate = postModel.lastModifiedDate;
    this.comments = postModel.comments;
    this.creator = postModel.creator;
  }
}
