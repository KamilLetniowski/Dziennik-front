export class Presence {
  id: number;
  presence: boolean;
  subject: string;
  date: Date;

  constructor(id: number, presence: boolean, subject: string, date: Date) {
    this.id = id;
    this.presence = presence;
    this.subject = subject;
    this.date = date;
  }

}
