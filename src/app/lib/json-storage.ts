import { promises as fs } from 'fs';
import path from 'path';
import { WaitlistEntry, WaitlistData } from '@/types/waitlist';

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'waitlist.json');

async function ensureDataFile(): Promise<void> {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }

  try {
    await fs.access(DATA_FILE);
  } catch {
    const initialData: WaitlistData = { entries: [] };
    await fs.writeFile(DATA_FILE, JSON.stringify(initialData, null, 2));
  }
}

export async function addEmailToWaitlist(
  email: string,
  isPurdueUser: boolean
): Promise<boolean> {
  try {
    await ensureDataFile();

    const fileContent = await fs.readFile(DATA_FILE, 'utf-8');
    const data: WaitlistData = JSON.parse(fileContent);

    // Check if email already exists
    const emailExists = data.entries.some(
      (entry) => entry.email.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
      return false;
    }

    // Add new entry
    const newEntry: WaitlistEntry = {
      email,
      isPurdueUser,
      timestamp: new Date().toISOString(),
      source: 'landing-page',
    };

    data.entries.push(newEntry);

    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error adding email to waitlist:', error);
    return false;
  }
}

export async function emailExists(email: string): Promise<boolean> {
  try {
    await ensureDataFile();

    const fileContent = await fs.readFile(DATA_FILE, 'utf-8');
    const data: WaitlistData = JSON.parse(fileContent);

    return data.entries.some(
      (entry) => entry.email.toLowerCase() === email.toLowerCase()
    );
  } catch (error) {
    console.error('Error checking email existence:', error);
    return false;
  }
}
