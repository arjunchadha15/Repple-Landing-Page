'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// ---- Types ----

interface GymSuggestion {
  id: string;
  name: string | null;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  notes: string | null;
  place_id: string | null;
  status: string;
  submitted_by_user_id: string;
  submitted_by_username: string;
  created_at: string;
}

interface VoteSummary {
  challenger_votes: number;
  target_votes: number;
}

interface Callout {
  id: string;
  status: string;
  challenger_id: string;
  challenger_username: string;
  challenger_video_url: string | null;
  target_id: string;
  target_username: string;
  target_video_url: string | null;
  vote_summary: VoteSummary | null;
  ai_confidence: number | null;
  dispute_requested_by: string;
  dispute_requested_by_username: string;
  dispute_reason: string;
  dispute_requested_at: string;
  created_at: string;
}

// ---- Helpers ----

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

// ---- Gym Card ----

function GymCard({
  suggestion,
  onRemove,
}: {
  suggestion: GymSuggestion;
  onRemove: (id: string) => void;
}) {
  const [rejecting, setRejecting] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleApprove() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/admin/gym-suggestions/${suggestion.id}/approve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ radius_meters: 100 }),
      });
      if (res.status === 400) {
        setError('Missing gym details — cannot approve without name and coordinates.');
      } else if (res.ok) {
        onRemove(suggestion.id);
      } else {
        setError('Approval failed. Try again.');
      }
    } catch {
      setError('Network error.');
    }
    setLoading(false);
  }

  async function handleReject() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/admin/gym-suggestions/${suggestion.id}/reject`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason: rejectReason || 'Duplicate or invalid location' }),
      });
      if (res.ok) {
        onRemove(suggestion.id);
      } else {
        setError('Rejection failed. Try again.');
      }
    } catch {
      setError('Network error.');
    }
    setLoading(false);
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <p className="font-semibold text-gray-900 text-base">
            {suggestion.name ?? <span className="text-gray-400 italic">No name provided</span>}
          </p>
          <p className="text-sm text-gray-500 mt-0.5">
            {suggestion.address ?? <span className="italic">No address</span>}
          </p>
          {suggestion.latitude != null && suggestion.longitude != null && (
            <p className="text-xs text-gray-400 mt-0.5">
              {suggestion.latitude.toFixed(5)}, {suggestion.longitude.toFixed(5)}
            </p>
          )}
        </div>
        <span className="text-xs text-gray-400 whitespace-nowrap">{formatDate(suggestion.created_at)}</span>
      </div>

      <p className="text-xs text-gray-500 mb-1">
        Submitted by <span className="font-medium text-gray-700">@{suggestion.submitted_by_username}</span>
      </p>

      {suggestion.notes && (
        <p className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2 mt-2 italic">
          &quot;{suggestion.notes}&quot;
        </p>
      )}

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {rejecting ? (
        <div className="mt-3 flex flex-col gap-2">
          <input
            type="text"
            placeholder="Rejection reason (optional)"
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <div className="flex gap-2">
            <button
              onClick={handleReject}
              disabled={loading}
              className="bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              {loading ? 'Rejecting...' : 'Confirm Reject'}
            </button>
            <button
              onClick={() => setRejecting(false)}
              className="text-sm text-gray-500 hover:text-gray-700 px-4 py-2"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-3 flex gap-2">
          <button
            onClick={handleApprove}
            disabled={loading}
            className="bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            {loading ? '...' : 'Approve'}
          </button>
          <button
            onClick={() => setRejecting(true)}
            disabled={loading}
            className="bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
}

// ---- Callout Card ----

function CalloutCard({
  callout,
  onRemove,
}: {
  callout: Callout;
  onRemove: (id: string) => void;
}) {
  const [deciding, setDeciding] = useState<'approve_target' | 'approve_challenger' | null>(null);
  const [notes, setNotes] = useState('');
  const [confirming, setConfirming] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function startDecide(decision: 'approve_target' | 'approve_challenger') {
    setDeciding(decision);
    setNotes('');
    setConfirming(false);
    setError('');
  }

  async function handleDecide() {
    if (!deciding) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/admin/callouts/${callout.id}/decide`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ decision: deciding, notes }),
      });
      if (res.ok) {
        onRemove(callout.id);
      } else {
        setError('Decision failed. Try again.');
      }
    } catch {
      setError('Network error.');
    }
    setLoading(false);
  }

  const votes = callout.vote_summary;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex gap-6">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Challenger</p>
            <p className="font-semibold text-gray-900">@{callout.challenger_username}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Target</p>
            <p className="font-semibold text-gray-900">@{callout.target_username}</p>
          </div>
        </div>
        <span className="text-xs text-gray-400 whitespace-nowrap">{formatDate(callout.created_at)}</span>
      </div>

      {callout.target_video_url && (
        <a
          href={callout.target_video_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm text-[#7F3DFF] underline underline-offset-2 mb-3 font-medium"
        >
          Watch Target Video
        </a>
      )}

      <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
        <span>
          Team votes:{' '}
          {votes
            ? `${votes.challenger_votes} for challenger, ${votes.target_votes} for target`
            : 'No votes cast'}
        </span>
        {callout.ai_confidence != null && (
          <span>AI: {Math.round(callout.ai_confidence * 100)}% confident</span>
        )}
      </div>

      <div className="bg-gray-50 rounded-lg px-3 py-2 mb-2">
        <p className="text-xs text-gray-400 mb-0.5">Dispute reason</p>
        <p className="text-sm text-gray-700 italic">&quot;{callout.dispute_reason}&quot;</p>
      </div>
      <p className="text-xs text-gray-500 mb-3">
        Requested by <span className="font-medium text-gray-700">@{callout.dispute_requested_by_username}</span>{' '}
        on {formatDate(callout.dispute_requested_at)}
      </p>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {deciding ? (
        <div className="flex flex-col gap-2">
          <textarea
            placeholder="Admin notes (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
          />
          {!confirming ? (
            <div className="flex gap-2">
              <button
                onClick={() => setConfirming(true)}
                className="bg-[#7F3DFF] hover:bg-[#6a2ee0] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Review Decision
              </button>
              <button
                onClick={() => setDeciding(null)}
                className="text-sm text-gray-500 hover:text-gray-700 px-4 py-2"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-sm font-medium text-yellow-800 mb-2">
                Are you sure? This cannot be undone.
              </p>
              <p className="text-sm text-yellow-700 mb-3">
                Decision:{' '}
                <strong>
                  {deciding === 'approve_target' ? 'Target wins' : 'Challenger wins'}
                </strong>
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleDecide}
                  disabled={loading}
                  className="bg-[#7F3DFF] hover:bg-[#6a2ee0] disabled:opacity-50 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  {loading ? 'Submitting...' : 'Confirm'}
                </button>
                <button
                  onClick={() => setConfirming(false)}
                  className="text-sm text-gray-500 hover:text-gray-700 px-4 py-2"
                >
                  Go Back
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-2">
          <button
            onClick={() => startDecide('approve_challenger')}
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Challenger Wins
          </button>
          <button
            onClick={() => startDecide('approve_target')}
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Target Wins
          </button>
        </div>
      )}
    </div>
  );
}

// ---- Dashboard ----

export default function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<'gyms' | 'disputes'>('gyms');
  const [gymSuggestions, setGymSuggestions] = useState<GymSuggestion[]>([]);
  const [callouts, setCallouts] = useState<Callout[]>([]);
  const [loadingGyms, setLoadingGyms] = useState(true);
  const [loadingCallouts, setLoadingCallouts] = useState(true);
  const [gymsError, setGymsError] = useState('');
  const [calloutsError, setCalloutsError] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem('adminAuthed') !== 'true') {
      router.replace('/admin');
      return;
    }

    async function fetchGyms() {
      try {
        const res = await fetch('/api/admin/gym-suggestions');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setGymSuggestions(Array.isArray(data) ? data : (data.suggestions ?? []));
      } catch {
        setGymsError('Failed to load gym suggestions.');
      }
      setLoadingGyms(false);
    }

    async function fetchCallouts() {
      try {
        const res = await fetch('/api/admin/callouts');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setCallouts(data.callouts ?? []);
      } catch {
        setCalloutsError('Failed to load disputes.');
      }
      setLoadingCallouts(false);
    }

    fetchGyms();
    fetchCallouts();
  }, [router]);

  function removeGym(id: string) {
    setGymSuggestions((prev) => prev.filter((s) => s.id !== id));
  }

  function removeCallout(id: string) {
    setCallouts((prev) => prev.filter((c) => c.id !== id));
  }

  function handleLogout() {
    sessionStorage.removeItem('adminAuthed');
    router.push('/admin');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Repple Admin</h1>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          Log out
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 px-6">
        <div className="flex gap-0 max-w-4xl mx-auto">
          {(['gyms', 'disputes'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
                tab === t
                  ? 'border-[#7F3DFF] text-[#7F3DFF]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {t === 'gyms' ? `Gym Approvals${!loadingGyms ? ` (${gymSuggestions.length})` : ''}` : `Disputes${!loadingCallouts ? ` (${callouts.length})` : ''}`}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {tab === 'gyms' && (
          <div>
            {loadingGyms ? (
              <Spinner />
            ) : gymsError ? (
              <ErrorMsg msg={gymsError} />
            ) : gymSuggestions.length === 0 ? (
              <EmptyMsg msg="No pending gym suggestions." />
            ) : (
              <div className="flex flex-col gap-4">
                {gymSuggestions.map((s) => (
                  <GymCard key={s.id} suggestion={s} onRemove={removeGym} />
                ))}
              </div>
            )}
          </div>
        )}

        {tab === 'disputes' && (
          <div>
            {loadingCallouts ? (
              <Spinner />
            ) : calloutsError ? (
              <ErrorMsg msg={calloutsError} />
            ) : callouts.length === 0 ? (
              <EmptyMsg msg="No disputes awaiting review." />
            ) : (
              <div className="flex flex-col gap-4">
                {callouts.map((c) => (
                  <CalloutCard key={c.id} callout={c} onRemove={removeCallout} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <div className="flex justify-center py-16">
      <div className="w-8 h-8 border-4 border-[#7F3DFF] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function ErrorMsg({ msg }: { msg: string }) {
  return <p className="text-center text-red-500 py-12">{msg}</p>;
}

function EmptyMsg({ msg }: { msg: string }) {
  return <p className="text-center text-gray-400 py-12">{msg}</p>;
}
