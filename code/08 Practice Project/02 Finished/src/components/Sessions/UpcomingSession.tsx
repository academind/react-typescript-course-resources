import Button from '../UI/Button.tsx';

type UpcomingSessionProps = {
  session: {
    id: string;
    title: string;
    summary: string;
    date: string;
  };
  onCancel: () => void;
};

export default function UpcomingSession({
  session,
  onCancel,
}: UpcomingSessionProps) {
  return (
    <article className="upcoming-session">
      <div>
        <h3>{session.title}</h3>
        <p>{session.summary}</p>
        <time dateTime={new Date(session.date).toISOString()}>
          {new Date(session.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </time>
      </div>
      <p className="actions">
        <Button textOnly onClick={onCancel}>
          Cancel
        </Button>
      </p>
    </article>
  );
}
