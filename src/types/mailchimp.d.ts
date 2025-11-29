declare module '@mailchimp/mailchimp_marketing' {
  interface Config {
    apiKey: string | undefined;
    server: string | undefined;
  }

  interface ListMember {
    email_address: string;
    status: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending';
    tags?: string[];
    merge_fields?: Record<string, any>;
  }

  interface Lists {
    addListMember(listId: string, body: ListMember): Promise<any>;
    getListMember(listId: string, subscriberHash: string): Promise<any>;
  }

  const mailchimp: {
    setConfig(config: Config): void;
    lists: Lists;
  };

  export default mailchimp;
}

