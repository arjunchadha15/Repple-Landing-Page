import { NextRequest, NextResponse } from 'next/server';
import { isValidEmail, isPurdueEmail } from '@/app/lib/email-validator';
import { addEmailToMailchimp } from '@/app/lib/mailchimp';
import { WaitlistResponse } from '@/types/waitlist';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email format
    if (!email || typeof email !== 'string') {
      const response: WaitlistResponse = {
        success: false,
        error: 'Email is required',
      };
      return NextResponse.json(response, { status: 400 });
    }

    if (!isValidEmail(email)) {
      const response: WaitlistResponse = {
        success: false,
        error: 'Please enter a valid email address',
      };
      return NextResponse.json(response, { status: 400 });
    }

    // Check if it's a Purdue email
    const isPurdue = isPurdueEmail(email);

    // Add to Mailchimp
    const result = await addEmailToMailchimp(email, isPurdue);

    if (!result.success) {
      if (result.error === 'EMAIL_EXISTS') {
        const response: WaitlistResponse = {
          success: false,
          error: 'This email is already on the waitlist',
        };
        return NextResponse.json(response, { status: 409 });
      }
      
      const response: WaitlistResponse = {
        success: false,
        error: 'Failed to add email to waitlist. Please try again.',
      };
      return NextResponse.json(response, { status: 500 });
    }

    const response: WaitlistResponse = {
      success: true,
      message: isPurdue
        ? "You're on the list! As a Purdue student, you'll get priority access."
        : "You're on the list! We'll notify you when Repple launches.",
      isPurdueUser: isPurdue,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error in waitlist API:', error);
    const response: WaitlistResponse = {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
    return NextResponse.json(response, { status: 500 });
  }
}
