import { supabase } from '../lib/supabaseClient'
import Link from 'next/link'
import styles from '../styles/Events.module.css'

export default function Events({ events }) {
  if (!events) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upcoming Events</h1>
      <ul className={styles.eventList}>
        {events.map((event) => (
          <li key={event.id}>
            <Link href={`/rsvp/${event.id}`} legacyBehavior>
              <a>
                {event.title} - {event.city} on {event.date}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .gt('date', new Date().toISOString())
    .order('date', { ascending: true })

  if (error) {
    console.error('Error fetching events:', error)
    return {
      props: {
        events: [],
      },
    }
  }

  return {
    props: {
      events,
    },
  }
}
