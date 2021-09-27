enum StreamStatus {
  ACTIVE = 'active',
  PAUSED = 'paused',
  LIVE = 'live',
  ARCHIVED = 'archived',
  UNSET = 'unset',
}

interface IStreamOptions {
  moderated?: boolean;
  commented?: boolean;
  commentsModerated?: boolean;
  chat?: boolean;
}

interface IStream {
  id: string;
  title: string;
  creator: string;
  startDate: string;
  endDate: string;
  lang: string;
  metadatas: Array<string>;
  status: StreamStatus;
  options: IStreamOptions;
}

export class Stream {
  public id = '';
  public title = '';
  public creator = '';
  public startDate = '';
  public endDate = '';
  public lang = '';
  public metadatas = [];
  public status = StreamStatus.UNSET;
  public options = {};

  constructor(streamModel: IStream) {
    this.id = streamModel.id;
    this.title = streamModel.title;
    this.creator = streamModel.creator;
    this.startDate = streamModel.startDate;
    this.endDate = streamModel.endDate;
    this.lang = streamModel.lang;
    this.metadatas = streamModel.metadatas;
    this.status = streamModel.status;
    this.options = streamModel.options;
  }
}
