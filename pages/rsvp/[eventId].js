import { supabase } from '../../lib/supabaseClient'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Rsvp.module.css'

export default function Rsvp({ event }) {
  const router = useRouter()
  const { eventId } = router.query
  const [status, setStatus] = useState('Yes')
  const [message, setMessage] = useState('')

  if (!event) return <div>Loading event details...</div>

  const handleSubmit = async () => {
    const user_id = 1 // TODO: Replace with actual authenticated user ID

    const { error } = await supabase.from('rsvps').upsert(
      { user_id, event_id: parseInt(eventId), status },
      { onConflict: ['user_id', 'event_id'] }
    )

    if (error) {
      setMessage(`Error submitting RSVP: ${error.message}`)
    } else {
      setMessage('RSVP submitted successfully!')
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>RSVP for {event.title}</h1>
      <p>{event.description}</p>

      <label htmlFor="status">Status:</label>
      <select
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className={styles.select}
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="Maybe">Maybe</option>
      </select>

      <button onClick={handleSubmit}>Submit RSVP</button>

      {message && <div className={styles.message}>{message}</div>}
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const { data: event, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', params.eventId)
    .single()

  if (error) {
    console.error('Error fetching event:', error)
    return { notFound: true }
  }

  return {
    props: {
      event,
    },
  }
}
