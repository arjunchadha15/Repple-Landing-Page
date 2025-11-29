export interface WaitlistEntry {
  email: string;
  isPurdueUser: boolean;
  timestamp: string;
  source: string;
}

export interface WaitlistData {
  entries: WaitlistEntry[];
}

export interface WaitlistResponse {
  success: boolean;
  message?: string;
  error?: string;
  isPurdueUser?: boolean;
}
