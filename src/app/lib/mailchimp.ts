import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function addEmailToMailchimp(email: string, isPurdue: boolean = false) {
  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID!,
      {
        email_address: email,
        status: 'subscribed',
        tags: isPurdue ? ['Purdue Student', 'Priority Access'] : ['General'],
        merge_fields: {
          SOURCE: 'Repple Waitlist',
        },
      }
    );
    return { success: true, data: response };
  } catch (error: any) {
    // Check if email already exists
    if (error.status === 400 && error.response?.body?.title === 'Member Exists') {
      return { success: false, error: 'EMAIL_EXISTS' };
    }
    console.error('Mailchimp error:', error.response?.body || error);
    return { success: false, error: error.message };
  }
}

export async function checkEmailExists(email: string): Promise<boolean> {
  try {
    const emailHash = require('crypto')
      .createHash('md5')
      .update(email.toLowerCase())
      .digest('hex');
    
    await mailchimp.lists.getListMember(
      process.env.MAILCHIMP_AUDIENCE_ID!,
      emailHash
    );
    return true;
  } catch (error: any) {
    if (error.status === 404) {
      return false;
    }
    console.error('Error checking email:', error);
    return false;
  }
}

